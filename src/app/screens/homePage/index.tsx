import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css"


import { useDispatch} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** Redux slice & Selector */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});
 

export default function HomePage() {
   const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());
  
  //2:selector: store => Data

  console.log("REACT_APP_API_URL",process.env.REACT_APP_API_URL)

  useEffect(() => {
    const product = new ProductService();
    product
    .getProducts({
      page: 1,
      limit: 4,
      order: "createdAt",
    })
    .then((data) => {
      setNewDishes(data);
    })
    .catch((err) => console.log(err));
  }, []);
  
  console.log("popular:", PopularDishes)

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
  