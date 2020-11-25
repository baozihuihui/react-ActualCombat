import React, { Component } from "react";
import Portal from "./portal";

export default class PortalParent extends Component {
  constructor() {
    super();
    this.root = document.getElementById("root");
    this.body = this.root.parentNode;
    this.targetDiv = null;
    this.state = {
      usePortal: false,
    };
  }

  componentDidMount() {
    this.portalParent = document.getElementById("portalParent");
    this.portalParent.addEventListener("click", () => {
      console.log("portalParent catch with addEventListener!");
    });
  }

  componentWillUnmount() {
    if (this.targetDiv) {
      this.body.removeChild(this.targetDiv);
    }
  }

  createTargetDiv = () => {
    if (!this.targetDiv) {
      this.targetDiv = document.createElement("div");
      this.targetDiv.id = "targetDiv";
      this.targetDiv.innerText = "this is a targetDiv!";
      this.body.appendChild(this.targetDiv);
      this.root.setAttribute("style", "background:blue");
      this.targetDiv.setAttribute(
        "style",
        "background:red;width:200px;height:200px;margin:5px"
      );
      // 这里通过原生DOM结点添加监听，也是能捕获到Portal里边的冒泡事件
      this.targetDiv.addEventListener("click", () => {
        console.log("targetDiv catch with addEventListener!");
      });
    }
  };

  moveChildToPortal = () => {
    if (!this.targetDiv) {
      console.log("当前未创建目标结点,无法使用Portal！");
      return;
    }
    this.setState((state) => ({ usePortal: !state.usePortal }));
  };

  parentCatch = () => {
    console.log("PortalParent catch click!");
  };

  render() {
    const { usePortal } = this.state;
    return (
      <>
        <h1>React Portal</h1>
        <h3>
          为 root 创建一个兄弟结点 targetDiv
          ，并将两个div通过颜色进行区分。蓝色的是React挂载的root,红色的是新建targetDiv的。
        </h3>
        <button onClick={this.createTargetDiv}> 创建 </button>
        <h3>将Portal下的子结点，移动到 targetDiv 下</h3>
        <button onClick={this.moveChildToPortal}>
          移{usePortal ? "入" : "出"}
        </button>
        <div id="portalParent" onClick={this.parentCatch}>
          <h2>这是父结点！都挂载在蓝色Div中</h2>

          <Portal usePortal={usePortal} targetDiv={this.targetDiv}>
            <h3>这里是子节点！</h3>
            <h5>通过控制台，查看点击事件的捕获情况！</h5>
            <button>点击</button>
          </Portal>
        </div>
      </>
    );
  }
}
