import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [reactBtn, setReactBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
