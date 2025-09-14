import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter-slice";

export const myStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof myStore.dispatch;
export type RootState = ReturnType<typeof myStore.getState>;
