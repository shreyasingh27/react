import { CDN_URL } from "../utils/constants";
const RestMenuCard = (props) => {
  console.log(props);
  const { restMenuitem } = props;
  //   const { title, categories } = restMenuitem;
  const { name, price, imageId, description, ratings } =
    restMenuitem?.card?.info;
  //   return (
  //     <>
  //       <h2>{title}</h2>
  //       <div>{/* {categories.itemcards.map(c)=>} */}</div>
  //     </>
  //   );
  return (
    <div className="resmenu flex gap-5 mb-5 border-b-gray-300 border-b pb-5">
      <div className="resmenu-left flex-1/3 gap-1 flex flex-col">
        <h4 className="font-medium text-xl">{name}</h4>
        <h4 className="font-medium">Rs {price / 100}</h4>
        <h6>Rating {ratings.aggregatedRating.rating}</h6>
        <p className="text-sm">{description}</p>
      </div>
      <div className="resmenu-right">
        <div className="resmenu-img">
          <img
            src={CDN_URL + imageId}
            className="img-responsive h-[200] object-cover w-[200]"
          />
        </div>
      </div>
    </div>
  );
};
export default RestMenuCard;
