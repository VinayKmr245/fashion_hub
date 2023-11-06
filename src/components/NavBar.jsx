import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../assets/vectorstock_45893929.png";

export const NavBar = () => {
  return (
    <div>
      <div className="nav-bar">
        <Link to="/">
          <div className="logo-holder">
            <img src={Logo} alt="logo" />
            <h2>Flash-Dog</h2>
          </div>
        </Link>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/products">
          <span>Products</span>
        </Link>
        <Link to="/bestdeals">
          <span>Best-Deals</span>
        </Link>
        <Link to="/newreleases">
          <span>New-Releases</span>
        </Link>
      </div>
    </div>
  );
};
