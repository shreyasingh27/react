import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resItem } = props;
  const { link } = resItem.cta;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla, id } =
    resItem?.info;
  return (
    <>
      <div className="res-card flex-1/5 rounded-b-sm bg-gray-100 shadow mb-4 hover:shadow">
        <Link to={`restaurants/${id}`}>
          <div className="res-logo">
            <img
              src={CDN_URL + cloudinaryImageId}
              className="img-responsive w-100 h-[300] object-cover rounded-sm"
            />
          </div>
          <div className="res-card-info p-2 flex flex-col gap-2">
            <h3 className="font-medium">{name}</h3>
            <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
            <h4 className="font-medium">{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <p className="text-sm">{sla.deliveryTime} minutes</p>
          </div>
        </Link>
      </div>
    </>
  );
};

//Higher Order Component
/**takes component as argument and return new component with Enhanced fetature */

export const withLabelResCard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="absolute bg-green-600 text-white rounded-sm px-2 py-1 text-xs">
          Open Now
        </div>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
