

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
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
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;

        }
    },


})



export const { setProducts, setLoading, setError } = productsSlice.actions;

export const selectProducts = (state: any) => state.products.products;

export default productsSlice.reducer;