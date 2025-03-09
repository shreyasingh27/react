import RestaurantCard from "./RestaurantCard";
// import initRestData from "../utils/mockData";
import { useState, useEffect, useDeferredValue } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restData, setRestData] = useState([]);
  const [filtereRestraunts, setFiltereRestraunts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8708958&lng=77.6629186&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const fetchedData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestData(fetchedData);
      setFiltereRestraunts(fetchedData);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  };

  function handleTopRated() {
    const filteredData = filtereRestraunts.filter(
      (topRated) => topRated.info.avgRating > 4.2
    );
    setFiltereRestraunts(filteredData);
  }
  function handleSearch() {
    console.log(restData);
    const searchedData = restData.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // const searchedData = restData.find((rname) => rname.name == searchText);
    console.log(searchedData);
    setFiltereRestraunts(searchedData);
  }
  //   if (restData.length === 0) {
  //     return <Shimmer size={restData.length} />;
  //   }
  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body">
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
