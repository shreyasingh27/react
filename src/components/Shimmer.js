const Shimmer = (props) => {
  let arr = Array.from({ length: 8 });
  //   console.log(arr);
  return (
    <>
      <button
        className="filter-btn"
        style={{
          minWidth: "150px",
          height: "32px",
          backgroundColor: "#f0f0f0",
        }}
      ></button>
      <div className="shimmer-container flex">
        {arr.map((_, index) => (
          <div
            key={index}
            className="shimmer-card res-card flex-1/5 rounded-b-sm bg-gray-100 shadow mb-4"
          ></div>
        ))}
      </div>
    </>
  );
};
export default Shimmer;
