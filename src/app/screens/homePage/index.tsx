import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css"




export default function HomePage() {

  //selector: store => Data

  useEffect(() => {
    //backend server data request => Data
  
  
  
    //slice: Data => Store(redux store)
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
  