import React from "react";
import { NavWrapper, NavItem, Btn } from "./NavStyle";
import { IoPlanetOutline } from "react-icons/io5";

//search bar for historical stories
const Nav = () => {
  return (
    <>
      <NavWrapper>
        <IoPlanetOutline />
        <Btn>Login via Google</Btn>
        <NavItem to="/">Story of the day</NavItem>
        <NavItem to="/news">News</NavItem>
        <NavItem to="/profile">User Profile</NavItem>
      </NavWrapper>
    </>
  );
};

export default Nav;
