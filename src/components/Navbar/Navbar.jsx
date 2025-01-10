import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      case "eur":
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      case "pkr":
        setCurrency({
          name: "pkr",
          symbol: "₨",
        });
        break;
      default:
        setCurrency({
          name: "usd",
          symbol: "$",
        });
    }
  };
  return (
    <div>
      <nav className="navbar">
        <Link to={"/"}>
          <img src={logo} alt="nav logo" className="logo" />
        </Link>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="nav-right">
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="pkr">PKR</option>
          </select>
          <button>
            Sign up <img src={arrow_icon} alt="arrow icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
