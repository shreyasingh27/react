import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 5,
    };
    console.log(this.props.name + " Constructor Did Mount");
  }
  componentDidMount() {
    console.log(this.props.name + " Component Did Mount");
  }
  render() {
    console.log(this.props.name + " Render Did Mount");
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <>
        <h1>User Class Component: {name}</h1>
        <h2>Count: {count}</h2>
        <h2>Count: {count2}</h2>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 5,
            })
          }
        >
          Click
        </button>
      </>
    );
  }
}
export default UserClass;
