import React, { Component } from "react";

export default class ClassComponent extends Component {
  onBtnClick = () => {
    this.props.clearClickNum("ClassComponent");
  };
  render() {
    return (
      <>
        <p>类组件</p>
        <p>点击次数：{this.props.clickNum}</p>
        <button onClick={this.onBtnClick}>清空父组件点击次数</button>
      </>
    );
  }
}
