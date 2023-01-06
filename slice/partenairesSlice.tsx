

import { createSlice } from "@reduxjs/toolkit";
import { apiPartenaire } from "../util/apiRequest";

export interface categoryState {
    partenaires: apiPartenaire[];
    loading: boolean;
    error: string | null;

}

const initialState: categoryState = {
    partenaires: [],
    loading: true,
    error: null,

}

export const partenairesSlice = createSlice({
    name: 'partenaires',
    initialState,
    reducers: {
        setPartenaires: (state, action) => {
            state.partenaires = action.payload;
            state.loading = true;
            state.error = null;
        },

        setError: (state, action) => {
            state.error = action.payload;

        }
    },


})



export const { setPartenaires, setError } = partenairesSlice.actions;

export const selectPartenaires = (state: any) => state.partenaires.partenaires;
export const selectPartenairesLoading = (state: any) => state.partenaires.loading;

export default partenairesSlice.reducer;
