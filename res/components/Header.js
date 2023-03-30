import React from "react";
import image from "../images/react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={image} className="nav-image" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
