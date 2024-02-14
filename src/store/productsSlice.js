import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = [...state?.products, action.payload];
        },
        deleteProducts: (state, action) => {
            state.products = state.products.filter(product => product.$id !== action.payload);
            return state;
        }
    }
})

export const { setProducts, deleteProducts } = productSlice.actions;
export default productSlice.reducer;