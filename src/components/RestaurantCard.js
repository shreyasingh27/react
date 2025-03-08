import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resItem } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resItem?.info;
  return (
    <>
      <div className="res-card">
        <div className="res-logo">
          <img src={CDN_URL + cloudinaryImageId} className="img-responsive" />
        </div>
        <div className="res-card-info">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{costForTwo}</h4>
          <h4>{avgRating}</h4>
          <p>{sla.deliveryTime} minutes</p>
        </div>
      </div>
    </>
  );
};
export default RestaurantCard;
