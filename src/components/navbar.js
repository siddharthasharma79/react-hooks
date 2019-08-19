import React from "react";

const Navbar = props => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <h2 class="text-warning">
        <i class="fas fa-laptop-code mr-3" />
        {props.title}
      </h2>
    </nav>
  );
};

export default Navbar;
