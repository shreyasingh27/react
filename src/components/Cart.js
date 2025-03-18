import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearItem());
  }
  return (
    <div className="menu-container inner-container w-[800] m-auto">
      <h1 className="text-3xl font-medium mb-4 border-b border-amber-100 pb-2 flex justify-between">
        <span>Cart</span>
        <button
          onClick={handleClearCart}
          className="bg-amber-300 px-3 rounded-lg text-sm hover:bg-amber-400 cursor-pointer"
        >
          Clear Cart
        </button>
      </h1>
      {cartItem.length === 0 && <h1>Your Cart is Empty, add items</h1>}
      {cartItem.map((item) => {
        return <CategoryItem menuItem={item} key={item.info.name} />;
      })}
    </div>
  );
};
export default Cart;
