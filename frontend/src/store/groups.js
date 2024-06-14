import { csrfFetch } from "./csrf";

//action types
const GET_GROUPS = "groups/getGroups"
const GET_ONE_GROUP = "groups/getOneGroup"
const GET_GROUP_EVENTS = "groups/getGroupEvents"
const CREATE_GROUP = "groups/createGroup"

const loadGroups = (groups) => {
    return {
        type: GET_GROUPS,
        payload: groups
    }
}

const loadOneGroup = (group) => {
    return {
        type: GET_ONE_GROUP,
        payload: group
    }
}

const loadGroupEvents = (group) => {
    return {
        type: GET_GROUP_EVENTS,
        payload: group
    }
}

const createGroup = (group) => {
    return {
        type: CREATE_GROUP,
        payload: group
    }
}


//thunks
export const fetchGroups = () => async dispatch => {
    const response = await csrfFetch("/api/groups")

    if (response.ok) {
        const data = await response.json();
        const groups = data.Groups;
        dispatch(loadGroups(groups))
    }
};

export const fetchOneGroup = (groupId) => async dispatch => {
    const response = await csrfFetch(`/api/groups/${groupId}`)
    if (response.ok) {
        const group = await response.json();
        dispatch(loadOneGroup(group));
    }
};

export const fetchGroupEvents = (groupId) => async dispatch => {
    const response = await csrfFetch(`/api/groups/${groupId}/events`)

    if (response.ok) {
        const groupEvents = await response.json()
        dispatch(loadGroupEvents(groupEvents))
    }
}

export const postGroup = (group) => async dispatch => {
    const response = await csrfFetch(`/api/groups`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(group)
    })

    if (response.ok) {
        const newGroup = await response.json();
        dispatch(createGroup(newGroup))
    }
}

//store
let initialState = {allGroups: {}, oneGroup: {}, events: {}};
const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GROUPS:
            return {...state, allGroups:{...action.payload}}

        case GET_ONE_GROUP:
            return {...state, oneGroup: {...action.payload}}

        case GET_GROUP_EVENTS:
            return {...state, events: {...action.payload}}

        case CREATE_GROUP:
            return {...state, oneGroup: {...action.payload}}

        default: return state;
    }
}

export default groupReducer;
