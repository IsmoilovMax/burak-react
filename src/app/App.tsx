import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route, useLocation } from "react-router-dom";
import HomePage  from "./screens/homePage";
import  ProductsPage  from "./screens/productsPage";
import  OrdersPage  from "./screens/ordersPage";
import  UsersPage  from "./screens/userPage";
import  HomeNavbar  from "./components/headers/HomeNavbar";
import  OtherNavbar  from "./components/headers/OtherNavbar";
import  Footer from "./components/footer";
import  HelpPage  from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css"
import { CartItem } from "../lib/types/search";



function App() {
  const location = useLocation();

  const cartJson: string | null = localStorage.getItem("cartData");
  const currenCart = cartJson ? JSON.parse(cartJson) : [];
  const [cartItems, setCartItems] = useState<CartItem[]>(currenCart);

  /**Handlers basket logic */
  const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find((item: CartItem) => item._id === input._id);
    if(exist) {
      const cartUpdate = cartItems.map((item: CartItem) => 
        item._id === input._id
        ? {... exist, quantity: exist.quantity + 1} 
        : item
      );
      setCartItems(cartUpdate);
      localStorage.setItem("cardData", JSON.stringify(cartUpdate));

    } else {
      const cartUpdate = [...cartItems, { ...input }];
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };


  return (

      <>
      {location.pathname === "/" ? <HomeNavbar cartItems={cartItems}/> : <OtherNavbar cartItems={cartItems}/>}   
        <Switch>
          <Route path="/products">
            <ProductsPage onAdd = {onAdd}/>
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <UsersPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      <Footer />
      </>
   
  );
}






export default App;