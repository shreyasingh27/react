import RestaurantCard from "./RestaurantCard";
import initRestData from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [restData, setRestData] = useState(initRestData);
  function handleTopRated() {
    const filteredData = initRestData.filter(
      (topRated) => topRated.info.avgRating > 4.5
    );
    setRestData(filteredData);
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restarants
        </button>
      </div>
      <div className="res-container">
        {restData.map((restraunt) => (
          <RestaurantCard key={restraunt.info.id} resItem={restraunt} />
        ))}
      </div>
    </div>
  );
};
export default Body;
