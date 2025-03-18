import CategoryItem from "./CategoryItem";
const RestMenuCard = ({ data, isVisible, handleClick, setShowIndex }) => {
  function handleClick() {
    console.log("clciked");
    setShowIndex();
  }
  return (
    <div className="border-b-8 border-gray-200 mb-5 pb-4 flex justify-between flex-col">
      <h2
        className="font-medium text-2xl mb-3 pb-3  flex justify-between :hover cursor-pointer"
        onClick={() => handleClick()}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </h2>
      {isVisible ? (
        <div className="accordian-body">
          {data.itemCards.map((item) => (
            <CategoryItem menuItem={item.card} key={item.card.info.name} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default RestMenuCard;
