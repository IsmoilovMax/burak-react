/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  
}


export default function HomeNavbar(props: HomeNavbarProps) {
  const { cartItems, onAdd, onDelete, onDeleteAll, onRemove, setSignupOpen, setLoginOpen } = props;
  const autMember = null;
  
  /** HANDLERS */

  

  return (
    <div className="home-navbar">
      <Container className="navber-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brend-logo" src="/icons/burak.svg" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products">Products</NavLink>
            </Box>
            {autMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {autMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            {/**BASKET */}
            <Basket cartItems={cartItems}
              onRemove={onRemove}  onAdd={onAdd}
              onDelete={onDelete} onDeleteAll={onDeleteAll} 
            />

            {!autMember ? (
              <Box>
                <Button variant="contained" className="login-button"
                onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              // eslint-disable-next-line jsx-a11y/role-supports-aria-props
              <img
                className="user-avatar"
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>
              World's Most Delicious Cousine
            </Box>
            <Box className={"wel-txt"}>The Choise, not just a choise</Box>
            <Box className={"service-txt"}>24 hours service</Box>
            <Box className={"signup"}>
              {!autMember ? (
                <Button variant={"contained"} className={"signup-button"}
                onClick={() => setSignupOpen(true)}>
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Box className={"logo-frame"}>
            <div className={"logo-img"}></div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
