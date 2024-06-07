import { csrfFetch } from "./csrf";

//action types
const GET_GROUPS = "groups/getGroups"

const loadGroups = (groups) => {
    return {
        type: GET_GROUPS,
        payload: groups
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

let initialState = {allGroups: {}, oneGroup: {}};
const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GROUPS:
            return {...state, allGroups:{...action.payload}}

        default: return state;
    }
}

export default groupReducer
