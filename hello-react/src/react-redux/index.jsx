import React from "react";
import Store from "./store";
import { ReactReduxProvider } from "./react-redux";
import Child from "./child";

export default class ReactReduxDemo extends React.Component {
  render() {
    return (
      <ReactReduxProvider value={Store}>
        <Child />
      </ReactReduxProvider>
    );
  }
}
