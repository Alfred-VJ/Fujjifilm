import { ALL, CREATE, DELETE, MODIFIC, SELECT } from "../actions/actions.types";

const initialState = {
    createProduct: false,
    deleteProduct: false,
    modificProduct: false,
    selectProduct: false,
}

export const optionsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case CREATE:
            return {
                createProduct: true,
                deleteProduct: false,
                modificProduct: false,
                selectProduct: false,
            };
        case DELETE:
            return {
                createProduct: false,
                deleteProduct: true,
                modificProduct: false,
                selectProduct: false,
            };
        case MODIFIC:
            return {
                createProduct: false,
                deleteProduct: false,
                modificProduct: true,
                selectProduct: false,
            };
        case SELECT:
            return {
                createProduct: false,
                deleteProduct: false,
                modificProduct: false,
                selectProduct: true,
            }
        case ALL:
            return {
                createProduct: false,
                deleteProduct: false,
                modificProduct: false,
                selectProduct: false,
            }
        default:
            return state;
    }
}