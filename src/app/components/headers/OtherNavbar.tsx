import { Container, Stack, Box, Button, MenuItem, ListItemIcon, Menu } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";

interface OtherNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  /**Login process */
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void
}

export default function OtherNavbar(props: OtherNavbarProps) {
  const { 
    cartItems, 
    onAdd, 
    onDelete, 
    onDeleteAll, 
    onRemove, 
    setSignupOpen, 
    setLoginOpen, 
    handleLogoutClick,
    anchorEl,
    handleCloseLogout,
    handleLogoutRequest 
  } = props;
  const { authMember } = useGlobals();
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
              src={
                authMember?.memberImage
                ? `${serverApi}/${authMember?.memberImage}`
                : "/icons/default-user.svg"
              }
              aria-haspopup={"true"}
              onClick={handleLogoutClick}
              />
            )}
            <Menu
  anchorEl={anchorEl}
	id="account-menu"
  open={Boolean(anchorEl)}
  onClose={handleCloseLogout}
  onClick={handleCloseLogout}
	PaperProps={{
		elevation: 0,
		sx: {
			overflow: 'visible',
			filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
			mt: 1.5,
			'& .MuiAvatar-root': {
				width: 32,
				height: 32,
				ml: -0.5,
				mr: 1,
			},
			'&:before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				top: 0,
				right: 14,
				width: 10,
				height: 10,
				bgcolor: 'background.paper',
				transform: 'translateY(-50%) rotate(45deg)',
				zIndex: 0,
			},
		},
	}}
	transformOrigin={{ horizontal: 'right', vertical: 'top' }}
	anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
>
	<MenuItem onClick={handleLogoutRequest}>
		<ListItemIcon>
			<Logout fontSize="small" style={{ color: 'blue' }} />
		</ListItemIcon>
		Logout
	</MenuItem>
          </Menu>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
