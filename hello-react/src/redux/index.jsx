import React from "react";
import Store from "./store";

export default class ReduxDemo extends React.Component {
  constructor() {
    super();
    Store.subscribe((store) => {
      this.forceUpdate();
    });
  }

  add = () => {
    Store.dispatch({ type: "REDUX/ADD" });
  };

  mule = () => {
    Store.dispatch({ type: "REDUX/MULE" });
  };

  synAdd = () => {
    Store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: "REDUX/ADD" });
      }, 1000);
    });
  };

  render() {
    return (
      <>
        <p>nums:{Store.getState().num}</p>
        <button onClick={this.add}>+1</button>
        <button onClick={this.mule}>-1</button>
        <button onClick={this.synAdd}>synAdd</button>
      </>
    );
  }
}
