import React from "react";

const NavLink = ({children, href}) => {
  return (
    <span>
      <a style={{ color: "black", textDecoration: "none" }} href={href}>
        <b>{children}</b>
      </a>
    </span>
  );
};

export default NavLink
