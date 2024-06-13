import { csrfFetch } from "./csrf"

//action types
const GET_EVENTS = "events/getEvents"
const GET_ONE_EVENT = "events/getOneEvent"


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


//reducer
let initialState = { allEvents: {}, oneEvent: {} }
const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return {...state, allEvents: {...action.payload}}

        case GET_ONE_EVENT:
            return {...state, oneEvent: {...action.payload}}

        default: return state;
    }
}

export default eventReducer;
