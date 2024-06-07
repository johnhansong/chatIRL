import { csrfFetch } from "./csrf"

//action types
const GET_EVENTS = "events/getEvents"

const loadEvents = (events) => {
    return {
        type: GET_EVENTS,
        payload: events
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


//reducer
let initialState = { allEvents: {}, oneEvent: {} }
const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return {...state, allEvents: {...action.payload}}

        default: return state;
    }
}

export default eventReducer;
