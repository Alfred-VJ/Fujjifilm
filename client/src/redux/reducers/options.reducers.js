import { ALL, CREATE, DELETE, MODIFIC, SELECT } from "../actions/actions.types";

const initialState = {
    createProduct: false,
    deleteProduct: false,
    modificProduct: false,
    selectProduct: false,
    allProductsList: true,
}

export const optionsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case CREATE:
            return {
                createProduct: true,
                deleteProduct: false,
                modificProduct: false,
                selectProduct: false,
                allProductsList: false
            };
        case DELETE:
            return {
                createProduct: false,
                deleteProduct: true,
                modificProduct: false,
                selectProduct: false,
                allProductsList: false
            };
        case MODIFIC:
            return {
                createProduct: false,
                deleteProduct: false,
                modificProduct: true,
                selectProduct: false,
                allProductsList: false
            };
        case SELECT:
            return {
                createProduct: false,
                deleteProduct: false,
                modificProduct: false,
                selectProduct: true,
                allProductsList: false
            }
        case ALL:
            return {
                createProduct: false,
                deleteProduct: false,
                modificProduct: false,
                selectProduct: false,
                allProductsList: true,
            }
        default:
            return state;
    }
}