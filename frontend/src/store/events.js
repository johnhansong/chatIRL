import { csrfFetch } from "./csrf"

//action types
const GET_EVENTS = "events/GET_EVENTS"
const GET_ONE_EVENT = "events/GET_ONE_EVENT"
const GET_EVENT_DESCRIPTION = "events/GET_EVENT_DESCRIPTION"
const ADD_EVENT = "events/ADD_EVENT"


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

        default: return state;
    }
}

export default eventReducer;
