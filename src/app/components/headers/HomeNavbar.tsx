/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
    const autMember = null;
    return <div className="home-navbar">
        <Container className="navber-container">
             <Stack 
                className="menu"
             >
                
            <Box>
                <NavLink to="/" >
                    <img  className="brend-logo"
                    src = "/icons/burak.svg" 
                    />
                </NavLink>
            </Box>
             <Stack className="links"             
             >
            <Box className={"hover-line"}>
                <NavLink to="/" activeClassName={"underline"}>
                    Home
                </NavLink>
            </Box>
            <Box className={"hover-line"} >
                <NavLink to="/products">Products</NavLink>
            </Box  >
            {autMember ? (
                <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>Orders</NavLink>
                 </Box>) 
            : null}
            {autMember ? (
                <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>My Page</NavLink>
                </Box>) 
            : null}
            <Box  className={"hover-line"} >
                <NavLink to="/help" activeClassName={"underline"}>Help</NavLink>
            </Box>
            {/**BASKET */}

            {!autMember ? (
                <Box>
                    <Button 
                    variant="contained"  className="login-button">
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
            <Stack>
                Detail
            </Stack>
        </Container> 
    </div>;
}

