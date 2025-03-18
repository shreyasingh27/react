import { useEffect, useState } from "react";
import { API_RES_URL } from "./constants";

const useRestaurantLists = () => {
  const [restData, setRestData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_RES_URL);
    const json = await data.json();
    const fetchedData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(fetchedData);
    setRestData(fetchedData);
  };

  return restData;
};

export default useRestaurantLists;
