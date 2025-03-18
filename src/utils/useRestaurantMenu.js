import { useEffect, useState } from "react";
import { API_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restMenu, setRestMenu] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(API_MENU_URL + resId);
    const json = await data.json();
    setRestMenu(json.data);
  };
  return restMenu;
};
export default useRestaurantMenu;
