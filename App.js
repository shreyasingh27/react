{
  /* <div id="parent">
  <div id="child1">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
  </div>
  <div id="child2">
    <h1>Heading2.1</h1>
    <h2>Heading2.2</h2>
  </div>
</div>; */
}

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "randomAttr" },
//   "Hello World from React!!"
// );
//console.log(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Heading1"),
    React.createElement("h2", {}, "Heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Heading2.1"),
    React.createElement("h2", {}, "Heading2.2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
