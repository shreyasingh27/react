import RestaurantCard from "./RestaurantCard";
// import initRestData from "../utils/mockData";
import { useState, useEffect, useDeferredValue } from "react";
import Shimmer from "./Shimmer";
import { API_RES_URL } from "../utils/constants";
import useRestaurantLists from "../utils/useRestaurantLists";
const Body = () => {
  // const [restData, setRestData] = useState([]);
  const [filtereRestraunts, setFiltereRestraunts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const restData = useRestaurantLists();
  useEffect(() => {
    console.log("useeffect");
    console.log("Fetcheddta", filtereRestraunts);
    setFiltereRestraunts(restData);
  }, [restData, searchText]);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const data = await fetch(API_RES_URL);
  //     const json = await data.json();
  //     const fetchedData =
  //       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants;
  //     console.log(fetchedData);
  //     setRestData(fetchedData);
  //     setFiltereRestraunts(fetchedData);
  //   } catch (err) {
  //     setError("Failed to fetch data");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  function handleTopRated() {
    const filteredData = filtereRestraunts.filter(
      (topRated) => topRated.info.avgRating > 4.2
    );
    setFiltereRestraunts(filteredData);
  }
  function handleSearch() {
    // console.log(restData);
    const searchedData = restData.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(searchedData);
    setFiltereRestraunts(searchedData);
  }

  if (restData.length === 0) {
    return <Shimmer size={restData.length} />;
  }

  return (
    <div className="body">
      {console.log(restData)}
      <div className="filter">
        <div className="search-wrap">
          <input
            type="text"
            placeholder="Search here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restarants
        </button>
      </div>
      <div className="res-container">
        {filtereRestraunts.map((restraunt) => (
          <RestaurantCard key={restraunt.info.id} resItem={restraunt} />
        ))}
      </div>
    </div>
  );
};
export default Body;
