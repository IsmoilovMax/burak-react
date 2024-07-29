import { configureStore, ThunkAction, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import HomePage from "./screens/homePage";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";


export const store = configureStore({
  middleware: (getDefaultMiddleware) => 
    //@ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;