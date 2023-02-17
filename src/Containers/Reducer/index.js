import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";

const reducer = combineReducers({
    allProducts: productReducer,
    product: selectedProductsReducer
})

export default reducer;