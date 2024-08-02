import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePage from "./screens/homePage";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";


export const store = configureStore({
  middleware: (getDefaultMiddleware) =>  
    //@ts-ignore
    getDefaultMiddleware().concat(reduxLogger),//Redux storeda qanday orgarish bolayotganini bizga bildirib beradi.`.
  reducer: {
    homePage: HomePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;  //change listener. (T extends (...args: any))
export type AppThunk<ReturnType = void> = ThunkAction<  //action creator and returns a function
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;