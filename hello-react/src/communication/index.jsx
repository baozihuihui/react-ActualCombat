import * as React from "react";
import PropsRoot from "./withProps";
import ContextRoot from "./withContext";

export default class Communication extends React.Component {
  constructor() {
    super();
    this.state = {
      sharedDataComponent: "props",
      updateContextComponentNum: 0,
    };
  }

  onSharedDataWithProps = (type) => {
    this.setState({ sharedDataComponent: type });
  };

  onBtnClick = () => {
    this.setState({
      updateContextComponentNum: this.state.updateContextComponentNum + 1,
    });
  };

  render() {
    return (
      <>
        <h1>组件间通信</h1>
        <button
          className="btnBase"
          onClick={() => {
            this.onSharedDataWithProps("props");
          }}
        >
          父子间数据通信
        </button>
        <button
          className="btnBase"
          onClick={() => {
            this.onSharedDataWithProps("context");
          }}
        >
          非父子间数据通信
        </button>
        {this.state.sharedDataComponent === "props" && <PropsRoot />}
        {this.state.sharedDataComponent === "context" && (
          <>
            <p>更新Context父组件次数：{this.state.updateContextComponentNum}</p>
            <button onClick={this.onBtnClick}>更新Context父组件</button>
            <ContextRoot />
          </>
        )}
      </>
    );
  }
}
