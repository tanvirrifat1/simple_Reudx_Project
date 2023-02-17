import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "../Constants/actionTypes"

export const setProduct = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}
export const selectedProducts = (product) => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectedProducts = () => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
    }
}