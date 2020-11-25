import * as React from "react";
import "./child.css";
export default class Child extends React.Component {
  constructor(poprs) {
    super();
    this.state = {
      isError: false,
      info: "change world by getDerivedStateFromProps()",
    };
    console.clear();
    console.log("\n constructor --->");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("\n getDerivedStateFromProps --->");
    console.log("nextProps", nextProps);
    console.log("prevState", prevState);
    if (nextProps.message.includes("React")) {
      return { info: "changed info to react" };
    } else if (nextProps.message.includes("World")) {
      return { info: "changed info to world" };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("\n getDerivedStateFromProps --->");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("\n getSnapshotBeforeUpdate --->");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    return "test";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("\n componentDidUpdate --->");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
  }

  componentDidMount() {
    console.log("\n componentDidMount");
  }

  componentWillUnmount() {
    console.log("\n componentWillUnmount");
  }

  btnForthrowError = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) {
      throw new Error("I crashed!");
    }

    return (
      <div className="childBase">
        <p>子组件 Child-cycleLife</p>
        <p>{this.props.message}</p>
        <p>{this.state.info}</p>
        <button onClick={this.btnForthrowError}>触发异常生命周期</button>
        <h5>
          注意：错误边界不会捕获事件处理中的异常！直接在click中抛出异常是不会被捕获的！
        </h5>
      </div>
    );
  }
}
