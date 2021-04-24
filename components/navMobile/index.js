import React from "react";
import { FaBars } from "react-icons/fa";
import { Wrapper } from "./styles/navMobile";

export default function NavMobile({ children, ...restProps }) {
  return <Wrapper>{children}</Wrapper>;
}

NavMobile.Icon = function NavMobileIcon({ children }) {
  return <FaBars size="30" />;
};
