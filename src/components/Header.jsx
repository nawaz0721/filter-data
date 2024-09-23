import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useContext, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  link,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

function Header() {
  const { user, setUser } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const handleLogoutUser = async () => {
    await signOut(auth);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to={"/home"}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to={"/products"}>
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to={"/abouts"}>
            Abouts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to={"/contact"}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link to={"/cart"}>
            <Badge count={cartItems.length}>
              <ShoppingCartOutlined style={{ fontSize: 30 }} />
            </Badge>
          </Link>
        </NavbarItem>
        {user?.isLogin ? (
          <Avatar src={user?.userInfo?.photoURL} size="md" />
        ) : (
          <NavbarItem>
            <Button to={"/signup"} as={Link} color="primary" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        )}
        {user?.isLogin ? (
          <Button onClick={handleLogoutUser}>Logout</Button>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link to={"/signin"}>Login</Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
