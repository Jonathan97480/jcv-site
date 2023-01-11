

import { createSlice } from "@reduxjs/toolkit";


export interface HeaderState {
    isOPen: boolean;
    error: string | null;

}

const initialState: HeaderState = {
    isOPen: false,
    error: null,

}

export const HeaderStatuSlice = createSlice({
    name: 'Header',
    initialState,
    reducers: {
        closeHeader: (state, action) => {
            state.isOPen = false;
            state.error = null;
        },

        openHeader: (state, action) => {
            state.isOPen = true;
            state.error = null;
        },

        setError: (state, action) => {
            state.error = action.payload;

        }
    },


})



export const { closeHeader, setError, openHeader } = HeaderStatuSlice.actions;

export const selectCloseHeader = (state: any) => state.Header.isOpen;
export const selectPartenairesLoading = (state: any) => state.Header.loading;

export default HeaderStatuSlice.reducer;
