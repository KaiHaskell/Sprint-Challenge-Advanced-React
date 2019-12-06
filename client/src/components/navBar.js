import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Navbar, Button } from "react-bootstrap";

const NavBarBasic = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Button variant="outlined" color="secondary" onClick={toggleMode}>
        Toggle Dark Mode
      </Button>
    </Navbar>
  );
};

export default NavBarBasic;
