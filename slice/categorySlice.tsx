

import { createSlice } from "@reduxjs/toolkit";
import { apiCategories } from "../interface";

export interface categoryState {
    category: apiCategories[];
    loading: boolean;
    error: string | null;

}

const initialState: categoryState = {
    category: [],
    loading: false,
    error: null,

}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            state.loading = true;
            state.error = null;
        },

        setError: (state, action) => {
            state.error = action.payload;

        }
    },


})



export const { setCategory, setError } = categorySlice.actions;

export const selectCategory = (state: any) => state.category.category;
export const selectCategoryLoading = (state: any) => state.category.loading;

export default categorySlice.reducer;
