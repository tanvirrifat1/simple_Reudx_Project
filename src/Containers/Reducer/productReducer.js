import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "../Constants/actionTypes";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECTED_PRODUCT:
            return { ...state, ...payload }
        case REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}