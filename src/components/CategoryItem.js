import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const CategoryItem = ({ menuItem }) => {
  //   console.log(menuItem);
  const { description, price, ratings, name, imageId } = menuItem.info;
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="resmenu flex gap-5 mb-5 border-b-gray-300 border-b pb-5 justify-between">
      <div className="resmenu-left w-9/12 gap-1 flex flex-col">
        <h4 className="font-medium text-xl">{name}</h4>
        <h4 className="font-medium">Rs {price / 100}</h4>
        <h6>Rating {ratings.aggregatedRating.rating}</h6>
        <p className="text-sm">{description}</p>
      </div>
      <div className="resmenu-right  flex justify-end relative  h-[150] object-cover w-3/12">
        <img src={CDN_URL + imageId} className="w-full object-cover" />
        <button
          onClick={() => handleClick(menuItem)}
          className="absolute z-50 bottom-2 right-0 left-0 m-auto bg-amber-300 rounded-lg text-sm hover:bg-amber-400 cursor-pointer inline-block w-max px-4 py-1 font-bold"
        >
          +ADD
        </button>
      </div>
    </div>
  );
};
export default CategoryItem;
