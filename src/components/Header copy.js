import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [reactBtn, setReactBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <div className={`online-status ${onlineStatus ? "online" : "offline"}`}>
          {onlineStatus ? "Online" : "Offline"}
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              reactBtn === "Login"
                ? setReactBtn("Logout")
                : setReactBtn("Login")
            }
          >
            {reactBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
