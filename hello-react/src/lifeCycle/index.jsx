import * as React from "react";
import Child from "./child";
import "../common/commonCSS.css.css";

export default class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "准备开始",
      clickNums: 0,
      isChildRemove: false,
    };
  }

  componentDidCatch(error, info) {
    console.log("\n componentDidCatch --->");
    console.log("error", error);
    console.log("info", info);
  }

  static getDerivedStateFromError() {
    console.log("\n getDerivedStateFromError --->");
  }

  onBtnClike = () => {
    if (this.state.isChildRemove) {
      console.log("子组件不存在，无法点击！");
      return;
    }
    this.setState((state) => ({
      message: state.clickNums % 2 ? "hello React" : "hello World",
      clickNums: state.clickNums + 1,
    }));
  };

  removeChild = () => {
    this.setState((state) => ({
      isChildRemove: !this.state.isChildRemove,
    }));
  };

  render() {
    const { message, clickNums, isChildRemove } = this.state;
    return (
      <>
        <h1>声明周期</h1>
        <h5>请打开控制台查看输出，详细查看生命周期调用过程！</h5>
        <button className="btnBase" onClick={this.onBtnClike}>
          按钮一：变更子结点内容
        </button>
        <button className="btnBase" onClick={this.removeChild}>
          按钮二：{isChildRemove ? "添加" : "移除"}子组件
        </button>
        <p>按钮一点击次数:{clickNums}</p>
        {!isChildRemove && <Child message={message} />}
      </>
    );
  }
}
