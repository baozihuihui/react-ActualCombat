import React, { Component } from "react";
import ReactRouterContext from "./ReactRouterContext";
export default class Redirct extends React.Component {
  render() {
    return (
      <ReactRouterContext.Consumer>
        {(context) => {
          return (
            <LifeCycle
              onMount={() => {
                context.history.push(this.props.push);
              }}
            />
          );
        }}
      </ReactRouterContext.Consumer>
    );
  }
}

class LifeCycle extends Component {
  // 放在 组件第一次完成后
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return null;
  }
}
