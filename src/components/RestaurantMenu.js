import { useParams } from "react-router-dom";
import RestMenuCard from "./RestMenuCard";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = (params) => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const restMenu = useRestaurantMenu(resId);
  if (restMenu.length === 0) {
    return <Shimmer />;
  }
  const categories =
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const resMenuHeader = restMenu.cards[2].card.card.info;

  return (
    <div className="menu-container inner-container w-[800] m-auto">
      <div className="menu-title flex flex-col gap-2 bg-gray-100 p-5 mb-5 rounded-xl">
        <h1 className="text-3xl font-medium">{resMenuHeader.name}</h1>
        <h3 className="address capitalize font-medium">
          {resMenuHeader.slugString.replaceAll("-", " ")}
        </h3>
      </div>
      {categories.map((category, index) => (
        <RestMenuCard
          data={category.card.card}
          key={category.card.card.title}
          isVisible={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
