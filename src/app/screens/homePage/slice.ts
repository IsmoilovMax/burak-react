import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";


const initialState: HomePageState = {
    popularDishes: [],
    newDishes: [],
    topUsers: [],
};
// bitt argument : options
const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    //malumotlardi ozgartirish : action.payload amalga oshadi.
    //state = initialState, action = slice: data payload ichida datamiz boladi.
    reducers: {
        setPopularDishes: (state, action) => {
            state.popularDishes = action.payload;
        },
        setNewDishes: (state, action) => {
            state.newDishes = action.payload;
        },
        setTopUsers: (state, action) => {
            state.topUsers = action.payload
        },
    },

});

export const { setPopularDishes, setNewDishes, setTopUsers} = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;