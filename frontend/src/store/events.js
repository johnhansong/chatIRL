import { csrfFetch } from "./csrf"

//action types
const GET_EVENTS = "events/GET_EVENTS"
const GET_ONE_EVENT = "events/GET_ONE_EVENT"
const GET_EVENT_DESCRIPTION = "events/GET_EVENT_DESCRIPTION"
const ADD_EVENT = "events/ADD_EVENT"
const ADD_EVENT_IMAGE = "events/ADD_EVENT_IMAGE"
const DELETE_EVENT = "events/DELETE_EVENT"


const loadEvents = (events) => {
    return {
        type: GET_EVENTS,
        payload: events
    }
}

const loadOneEvent = (event) => {
    return {
        type: GET_ONE_EVENT,
        payload: event
    }
}

const loadEventDetail = (event) => {
    return {
        type: GET_EVENT_DESCRIPTION,
        payload: event
    }
}

const addEvent = (event) => {
    return {
        type: ADD_EVENT,
        payload: event
    }
}

const addEventImage = (eventId, image) => {
    return {
        type: ADD_EVENT_IMAGE,
        eventId,
        image
    }
}

const doomedEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        eventId
    }
}


//thunks
export const fetchEvents = () => async dispatch => {
    const response = await csrfFetch("/api/events")

    if (response.ok) {
        const data = await response.json()
        const events = data.Events
        dispatch(loadEvents(events))
    }
}

export const fetchOneEvent = (eventId) => async dispatch => {
    const response = await csrfFetch(`/api/events/${eventId}`)

    if (response.ok) {
        const event = await response.json()
        dispatch(loadOneEvent(event))
    }
}

export const fetchEventDetails = (eventId) => async dispatch => {
    const response = await csrfFetch(`/api/events/${eventId}`)

    if (response.ok) {
        const event = await response.json()
        dispatch(loadEventDetail(event))
        return event
    }
}

export const postEvent = (event, groupId) => async dispatch => {
    const response = await csrfFetch(`/api/groups/${groupId}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event),
    });

    if (response.ok) {
        const event = await response.json();
        dispatch(addEvent(event))
        return event;
    }
}

export const postEventImage = (eventId, url, preview = false) => async dispatch => {
    const response = await csrfFetch(`/api/events/${eventId}/images`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url, preview})
    });

    if (response.ok) {
        const image = await response.json();
        dispatch(addEventImage(eventId, image));
        return image;
    }
}

export const destroyEvent = (eventId) => async dispatch => {
    const response = await csrfFetch(`/api/events/${eventId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(doomedEvent(eventId))
    }
}


//reducer
let initialState = { allEvents: {}, oneEvent: {}, eventDetails: [] }
const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return {...state, allEvents: {...action.payload}}

        case GET_ONE_EVENT:
            return {...state, oneEvent: {...action.payload}}

        case GET_EVENT_DESCRIPTION:
            return {...state, eventDetails: [...state.eventDetails, action.payload]}

        case ADD_EVENT:
            return {
                ...state,
                allEvents: {...state.allEvents, [action.payload.id]: action.payload},
                oneEvent: {...action.payload}
            }

        case ADD_EVENT_IMAGE:
            return {
                ...state,
                allEvents: {...state.allEvents},
                oneEvent: {...state.oneEvent, EventImages: [action.image]},
            }

        case DELETE_EVENT:
            const newState = {
                ...state,
                allEvents: {...state.allEvents},
                oneGroup: {}
            }
            delete newState.allEvents[action.eventId]
            return newState;

        default: return state;
    }
}

export default eventReducer;
