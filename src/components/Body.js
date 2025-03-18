import RestaurantCard, { withLabelResCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurantLists from "../utils/useRestaurantLists";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [filtereRestraunts, setFiltereRestraunts] = useState();
  const [searchText, setSearchText] = useState("");
  const restData = useRestaurantLists();
  const onlineStatus = useOnlineStatus();
  const LabelRestaurantCard = withLabelResCard(RestaurantCard);
  useEffect(() => {
    setFiltereRestraunts(restData);
  }, [restData, searchText]);

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
  if (onlineStatus === false) {
    return <h1>You are Offline, Check your internet connection</h1>;
  }

  if (restData.length === 0) {
    return <Shimmer size={restData.length} />;
  }

  return (
    <div className="body">
      {console.log(restData)}
      <div className="filter flex justify-between mb-5">
        <div className="search-wrap flex">
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded-sm p-1 text-sm mr-4 w-[200]"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-amber-300 px-3 rounded-lg text-sm font-medium hover:bg-amber-400 cursor-pointer"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-3 border border-amber-500 rounded-lg text-sm font-medium hover:bg-amber-400 cursor-pointer"
          onClick={handleTopRated}
        >
          Top Rated Restarants
        </button>
      </div>
      <div className="res-container flex gap-5 flex-wrap">
        {filtereRestraunts.map((restraunt) =>
          restraunt.info.isOpen ? (
            <LabelRestaurantCard key={restraunt.info.id} resItem={restraunt} />
          ) : (
            <RestaurantCard key={restraunt.info.id} resItem={restraunt} />
          )
        )}
      </div>
    </div>
  );
};
export default Body;
