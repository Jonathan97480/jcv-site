

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import { apiCategories, apiProduct } from "../interface";

export interface categoryState {
    products: apiCategories[];
    loading: boolean;
    error: string | null;

}

const initialState: categoryState = {
    products: [],
    loading: true,
    error: null,

}

export const categorySlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategory: (state, action) => {
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



export const { setCategory, setLoading, setError } = categorySlice.actions;

export const selectCategory = (state: any) => state.products.products;

export default categorySlice.reducer;
