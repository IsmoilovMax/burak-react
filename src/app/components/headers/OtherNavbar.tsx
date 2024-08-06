import { Container, Stack, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface OtherNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
}

export default function OtherNavbar(props: OtherNavbarProps) {
  const { cartItems, onAdd, onDelete, onDeleteAll, onRemove, setSignupOpen, setLoginOpen  } = props;
  const authMember = null;
  return (
    <div className="other-navbar">
      <Container className="navber-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brend-logo" src="/icons/burak.svg" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/">Home</NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products">Products</NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
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
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button"
                onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              // eslint-disable-next-line jsx-a11y/role-supports-aria-props, jsx-a11y/alt-text
              <img
                className="user-avatar"
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
