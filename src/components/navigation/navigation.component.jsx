import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import MobileLogo from "../../assets/mobile-logo.png";

import {
  NavigationContainer,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={MobileLogo} />
        </LogoContainer>
        <NavLinks>
          <div onClick={toggleIsCartOpen}>
            <CartIcon />
          </div>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
