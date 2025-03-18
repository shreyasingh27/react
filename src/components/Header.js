import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { userName, setUserName } = useContext(UserContext);
  console.log(userName);
  const onlineStatus = useOnlineStatus();
  const [reactBtn, setReactBtn] = useState("Login");
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  function handleClick() {
    if (reactBtn === "Login") {
      setReactBtn("Logout");
      setUserName("Shreya");
    } else {
      setReactBtn("Login");
      setUserName("User");
    }
  }
  return (
    <div className="flex justify-between align-middle px-5 py-2 bg-green-200 lg:bg-amber-100">
      <div className="logo">
        <Link to="/">
          <img className="w-15" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <div
          className={`mr-3 online-status rounded-2xl text-xs text-white px-2 py-1 font-bold  ${
            onlineStatus ? "bg-green-700" : "bg-red-700"
          }`}
        >
          {onlineStatus ? "Online" : "Offline"}
        </div>
        <ul className="flex gap-5 font-medium">
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
            <Link to="/cart" className="relative">
              Cart
              <span className="absolute w-[20] h-[20] bg-amber-900 text-white rounded-full text-center text-sm -top-2">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li>
            <button
              className="login-btn bg-amber-300 px-3 rounded-lg text-sm hover:bg-amber-400 cursor-pointer"
              onClick={handleClick}
            >
              {reactBtn}
            </button>
          </li>
          <li>{userName}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
