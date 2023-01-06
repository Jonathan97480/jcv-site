

import { createSlice } from "@reduxjs/toolkit";
import { apiProduct } from "../interface";

export interface productsState {
    products: apiProduct[];
    loading: boolean;
    error: string | null;

}

const initialState: productsState = {
    products: [],
    loading: true,
    error: null,

}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.loading = true;
            state.error = null;
        },

        setError: (state, action) => {
            state.error = action.payload;

        }
    },


})



export const { setProducts, setError } = productsSlice.actions;

export const selectProducts = (state: any) => state.products.products;
export const selectProductsLoading = (state: any) => state.products.loading;

export default productsSlice.reducer;