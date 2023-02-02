import {
    ALL,
    CREATE,
    DELETE,
    MODIFIC,
    SELECT,
} from "./actions.types";

const createProduct = () => {
    return { type: CREATE }
}

const deleteProduct = () => {
    return { type: DELETE }
}

const modificProduct = () => {
    return { type: MODIFIC }
}

const selectProduct = () => {
    return { type: SELECT }
}

const allProducts = () => {
    return { type: ALL }
}

export const actionsOptionsProducts = {
    createProduct,
    deleteProduct,
    modificProduct,
    selectProduct,
    allProducts,
}