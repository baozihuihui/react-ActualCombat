import React from "react";
import { connectWithHooks } from "./react-redux";
// import { connect } from "./react-redux";

class Chid extends React.Component {
  add = () => {
    this.props.add();
  };

  mule = () => {
    this.props.mule();
  };

  synAdd = () => {
    this.props.syncAdd();
  };

  render() {
    return (
      <>
        <p>nums:{this.props.num}</p>
        <button onClick={this.add}>+1</button>
        <button onClick={this.mule}>-1</button>
        <button onClick={this.synAdd}>synAdd</button>
      </>
    );
  }
}

export default connectWithHooks((state) => ({ num: state.num }), {
  add: () => ({ type: "REDUX/ADD" }),
  mule: () => ({ type: "REDUX/MULE" }),
  syncAdd: () => (dispatch) =>
    setTimeout(() => {
      dispatch({ type: "REDUX/ADD" });
    }, 1000),
})(Chid);

// export default connect((state) => ({ num: state.num }), {
//   add: () => ({ type: "REDUX/ADD" }),
//   mule: () => ({ type: "REDUX/MULE" }),
//   syncAdd: () => (dispatch) =>
//     setTimeout(() => {
//       dispatch({ type: "REDUX/ADD" });
//     }, 1000),
// })(Chid);
