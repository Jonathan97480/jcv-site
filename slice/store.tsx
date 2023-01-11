import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";
import { categorySlice } from "./categorySlice";
import { partenairesSlice } from "./partenairesSlice";
import { createWrapper } from "next-redux-wrapper";
import { HeaderStatuSlice } from "./headerStatu.Slice";


export const store = () => configureStore({
    reducer: {
        [productsSlice.name]: productsSlice.reducer,
        [categorySlice.name]: categorySlice.reducer,
        [partenairesSlice.name]: partenairesSlice.reducer,
        [HeaderStatuSlice.name]: HeaderStatuSlice.reducer,


    },
    devTools: true,
});




export type RootState = ReturnType<typeof store>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const wrapper = createWrapper(store, { debug: true });
