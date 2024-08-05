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
import useBasket from "./hooks/useBasket";



function App() {
  const location = useLocation();

  /**useBasket.ts logic */
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();

  return (

      <>
      {location.pathname === "/" 
      ? <HomeNavbar cartItems={cartItems}
          onRemove={onRemove}  onAdd={onAdd}
          onDelete={onDelete} onDeleteAll={onDeleteAll} 
      /> 
      : <OtherNavbar cartItems={cartItems}
        onRemove={onRemove}  onAdd={onAdd}
        onDelete={onDelete} onDeleteAll={onDeleteAll} 
      />}   
        <Switch>
          <Route path="/products">
            <ProductsPage 
            onAdd = {onAdd} />
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