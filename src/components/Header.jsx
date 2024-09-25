import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useContext } from "react";
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
  Avatar,
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
  const { user } = useContext(AuthContext);
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
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="custom-navbar w-full"
      style={{ backgroundColor: "#1f1f1f" }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          style={{ color: "white" }}
        />
        <NavbarBrand>
          <Link to={"/"}>
            <AcmeLogo />
            <p className="font-bold text-inherit" style={{ color: "white" }}>
              ACME
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to={"/home"} style={{ color: "white" }}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/products"} style={{ color: "white" }}>
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/abouts"} style={{ color: "white" }}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/contact"} style={{ color: "white" }}>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link to={"/cart"}>
            <Badge
              count={cartItems.length}
              style={{ backgroundColor: "#ffcc00", color: "black" }}
            >
              <ShoppingCartOutlined style={{ fontSize: 30, color: "white" }} />
            </Badge>
          </Link>
        </NavbarItem>
        {user?.isLogin ? (
          <Avatar src={user?.userInfo?.photoURL} size="md" />
        ) : (
          <NavbarItem>
            <Button
              to={"/signup"}
              as={Link}
              style={{ color: "yellow" }}
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        )}
        {user?.isLogin ? (
          <Button onClick={handleLogoutUser}>Logout</Button>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link to={"/signin"} style={{ color: "white" }}>
              Login
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              size="lg"
              href="#"
              style={{
                color:
                  index === 2
                    ? "#ffcc00"
                    : index === menuItems.length - 1
                    ? "red"
                    : "white",
              }}
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
