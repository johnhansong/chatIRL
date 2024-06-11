import { csrfFetch } from "./csrf";

//action types
const GET_GROUPS = "groups/getGroups"
const GET_ONE_GROUP = "groups/getOneGroup"

const loadGroups = (groups) => {
    return {
        type: GET_GROUPS,
        payload: groups
    }
}

const loadOneGroup = (group) => {
    return {
        type: GET_ONE_GROUP,
        group
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
    const response = csrfFetch(`/api/groups/${groupId}`)
    if (response.ok) {
        const group = await response.json();
        dispatch(loadOneGroup(group));
    }
};



let initialState = {allGroups: {}, oneGroup: {}};
const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GROUPS:
            return {...state, allGroups:{...action.payload}}

        default: return state;
    }
}

export default groupReducer;
