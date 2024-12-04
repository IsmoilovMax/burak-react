import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";


const initialState: OrdersPageState = {
    pausedOrders: [],
    processOrders: [],
    finishedOrders: [],
};
// bitt argument : options
const ordersPageSlice = createSlice({
    name: "ordersPage",
    initialState,
    //malumotlardi ozgartirish : action.payload amalga oshadi.
    //state = initialState, action = slice: data payload ichida datamiz boladi.
    reducers: {
        setPausedOrders: (state, action) => {
            state.pausedOrders = action.payload;
        },
        setProcessOrders: (state, action) => {
            state.processOrders = action.payload;
        },
        setFinishedOrders: (state, action) => {
            state.finishedOrders = action.payload
        },
    },

});

export const { setPausedOrders, setProcessOrders, setFinishedOrders} = 
    ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;