import React from "react";
import "../css/app.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UsersPage } from "./screens/userPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/products">Praducts</Link>
            </li>
            <li>
              <Link to="/orders">OrderPage</Link>
            </li>
            <li>
              <Link to="/member-page">UsersPage</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <UsersPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}






export default App;