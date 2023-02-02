import axios from 'axios';
import {
    GET_ALL_USERS,
    GET_USER_ID,
    CREATE_USER,
    DELETE_USER,
    UPDATED_USER,
    GET_USER_NAME,
    OFFLINE,
} from './actions.types';


const getAllUsers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('https://localhost:7243/users');
            return dispatch({
                type: GET_ALL_USERS,
                payload: data,
            })
        } catch (error) {
            console.error(error)
        }
    }
}

const getUserById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://localhost:7243/users/${id}`);
            return dispatch({
                type: GET_USER_ID,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const getUserByName = (name, password) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://localhost:7243/users/name?name=${name}`);
            return dispatch({
                type: GET_USER_NAME,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const createUser = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('https://localhost:7243/users', user);
            return dispatch({
                type: CREATE_USER,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`https://localhost:7243/users/${id}`);
            return dispatch({
                type: DELETE_USER,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const updateUser = (id, user) => {
    return async dispatch => {
        try {
            const { data } = await axios.put(``, user);
            return dispatch({
                type: UPDATED_USER,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const offLine = () => {
    return { type: OFFLINE }
}

export const actionsUsers = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    getUserByName,
    offLine,
}