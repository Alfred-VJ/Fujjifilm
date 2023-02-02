import axios from 'axios';
import { 
    GET_ALL_PRODUCTS,
    GET_PRODUCT_ID,
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT
} from './actions.types';

const getAllProducts = () => {//https://localhost:7243/products
    return async dispatch => {
        try {
            const {data} = await axios.get('https://localhost:7243/products');
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const getProductById = (id) => {//https://localhost:7243/products/2
    return async dispatch => {
        try {
            const {data} = await axios.get(`https://localhost:7243/products/${id}`);
            return dispatch({
                type: GET_PRODUCT_ID,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const createProduct = (product) => {//https://localhost:7243/products
    return async dispatch => {
        try {
            const {data} = await axios.post('https://localhost:7243/products', product);
            return dispatch({
                type: CREATE_PRODUCT,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const updateProduct = (id, product) => {//https://localhost:7243/products/1
    return async dispatch => {
        console.log({id, product})
        try {
            const {data } = await axios.put(`https://localhost:7243/products/${id}`, product);
            return dispatch({
                type: UPDATE_PRODUCT,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

const deleteProduct = (id) => {//https://localhost:7243/products/3
    return async dispatch => {
        try {
            const {data} = await axios.delete(`https://localhost:7243/products/${id}`);
            return dispatch({
                type: DELETE_PRODUCT,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const actionsProducts = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
}