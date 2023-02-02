import {
    GET_ALL_USERS,
    GET_USER_ID,
    CREATE_USER,
    UPDATED_USER,
    DELETE_USER,
    GET_USER_NAME,
    OFFLINE,
} from '../actions/actions.types'

const initialState = {
    users: [],
    user: {},
    info: null,
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case OFFLINE:
            return {
                ...state,
                user: {},
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case GET_USER_ID:
            return {
                ...state,
                user: action.payload,
            };
        case GET_USER_NAME:
            return {
                ...state,
                user: action.payload,
            }
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
            }
        case DELETE_USER:
            return {
                ...state,
                info: action.payload,
            }
        case UPDATED_USER:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}