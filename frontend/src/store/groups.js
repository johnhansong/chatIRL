import { csrfFetch } from "./csrf";

//action types
const GET_GROUPS = "groups/GET_GROUPS"
const GET_ONE_GROUP = "groups/GET_ONE_GROUP"
const GET_GROUP_EVENTS = "groups/GET_GROUP_EVENTS"
const ADD_ONE = "groups/ADD_ONE"
const ADD_GROUP_IMAGE = "groups/ADD_GROUP_IMAGE"
const DELETE_GROUP = "groups/DELETE_GROUP"

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

const addGroup = (group) => {
    return {
        type: ADD_ONE,
        payload: group
    }
}

const createGroupImage = (groupId, image) => {
    return {
        type: ADD_GROUP_IMAGE,
        groupId,
        image
    }
}

const doomedGroup = (groupId) => {
    return {
        type: DELETE_GROUP,
        groupId
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
        dispatch(addGroup(newGroup))
        return newGroup;
    }
}

export const postGroupImage = (groupId, imageURL, preview = false) => async dispatch => {
    const response = await csrfFetch(`/api/groups/${groupId}/images`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({imageURL, preview})
    })

    if (response.ok) {
        const newImage = await response.json();
        dispatch(createGroupImage(groupId, newImage))
        return newImage
    }
}

export const updateGroup = (group, groupId) => async dispatch => {
    const response = await csrfFetch(`/api/groups/${groupId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(group),
    });

    if (response.ok) {
        const editedGroup = await response.json()
        dispatch(addGroup(editedGroup));
        return editedGroup
    }
}

export const destroyGroup = (groupId) => async dispatch => {
    const response = await csrfFetch(`/api/groups/${groupId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        dispatch(doomedGroup(groupId))
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

        case ADD_ONE:
            return {
                ...state,
                allGroups: {
                    ...state.allGroups,
                    [action.payload.id]: action.payload
                },
                oneGroup: {...action.payload}
            }

        case ADD_GROUP_IMAGE:
            return {
                ...state,
                allGroups: {...state.allGroups},
                oneGroup: {...state.oneGroup, GroupImages: [action.image]}
            }

        case DELETE_GROUP: {
            const newState = {
                ...state,
                allGroups: {...state.allGroups},
                oneGroup: {}
            }
            delete newState.allGroups[action.groupId]
            return newState;
        }

        default: return state;
    }
}

export default groupReducer;
