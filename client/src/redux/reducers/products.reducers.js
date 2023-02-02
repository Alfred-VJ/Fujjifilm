import { 
    GET_ALL_PRODUCTS,
    GET_PRODUCT_ID,
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
} from "../actions/actions.types";

const initialState = {
    products: [],
    product: {},
    info: null,
}

export const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case GET_PRODUCT_ID:
            return {
                ...state,
                product: action.payload,
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                info: action.payload,
            }
        default:
            return state;
    }
}