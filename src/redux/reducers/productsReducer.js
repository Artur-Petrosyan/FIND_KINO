import { GET_PRODUCTS } from "../../constants/types";

const productsReducer = (state = [], { type, data }) => {
    switch (type) {
        case GET_PRODUCTS: return [...data]
        default: return state
    }
}

export default productsReducer;