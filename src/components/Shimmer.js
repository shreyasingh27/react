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
      <div className="shimmer-container">
        {arr.map((_, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
      </div>
    </>
  );
};
export default Shimmer;
