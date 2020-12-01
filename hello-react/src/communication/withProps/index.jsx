import * as React from "react";
import FunctionComponent from "./functionComp";
import ClassComponent from "./classComp";

export default class Communication extends React.Component {
  constructor() {
    super();
    this.state = {
      clickNum: 0,
      clearByChild: "",
    };
  }

  onBtnClick = () => {
    this.setState((state) => ({
      clickNum: state.clickNum + 1,
      clearByChild: "",
    }));
  };

  clearClickNum = (childNAme) => {
    if (this.state.clickNum !== 0) {
      this.setState({
        clickNum: 0,
        clearByChild: `数据已经被${childNAme}组件进行清空！`,
      });
    } else {
      alert("当前点击次数已经为0,无需清空！");
    }
  };

  render() {
    return (
      <div className="'divBase">
        <button onClick={this.onBtnClick}>点击试试</button>
        {this.state.clearByChild !== "" && <p>{this.state.clearByChild}</p>}

        <FunctionComponent
          clickNum={this.state.clickNum}
          clearClickNum={this.clearClickNum}
        />
        <ClassComponent
          clickNum={this.state.clickNum}
          clearClickNum={this.clearClickNum}
        />
      </div>
    );
  }
}
