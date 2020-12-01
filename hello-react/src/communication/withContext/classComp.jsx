import React, { Component } from "react";
import * as Store from "./contextStore";

export default class classComp extends Component {
  componentDidUpdate() {
    console.log("classComp componentDidUpdate");
  }

  onBtnClick = () => {
    const { light, dark } = Store.Theme;
    if (this.context.value === light) {
      this.context.onChange(dark);
    } else {
      this.context.onChange(light);
    }
  };

  render() {
    return (
      <div className="divBase">
        <h1>类组件 Context 应用</h1>
        <h2>
          上级组件声明的 ThemeContext {JSON.stringify(this.context.value)}
        </h2>
        <button onClick={this.onBtnClick}>变更ThemeConText</button>
      </div>
    );
  }
}

classComp.contextType = Store.ThemeContext;
