import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css"


import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** Redux slice & Selector */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
 
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({popularDishes})
)

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever)
  //2:selector: store => Data

  console.log("REACT_APP_API_URL",process.env.REACT_APP_API_URL)

  useEffect(() => {
    
    //1:backend server data request => Data(json)
      
  
    //slice: Data => Store(redux store joyledi)
   
  }, []);

    

    return (<div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
      
    </div>
    );
}
  