import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import approvalSlice from "./reducers/approval";

const store = configureStore({
  reducer: {
    approvalSlice,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializeableCheck: false }).concat(),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
