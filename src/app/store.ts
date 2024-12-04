import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePage from "./screens/homePage";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";
import ProductsPageReducer from "./screens/productsPage/slice";
import OrdersPageReducer from "./screens/ordersPage/slice";


export const store = configureStore({
  middleware: (getDefaultMiddleware) =>  
    //@ts-ignore
    getDefaultMiddleware().concat(reduxLogger),//Redux storeda qanday orgarish bolayotganini bizga bildirib beradi.`.
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer,
    ordersPage: OrdersPageReducer,
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