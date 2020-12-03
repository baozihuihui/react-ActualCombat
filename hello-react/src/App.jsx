import * as React from "react";
import { ClearConsole } from "./common/commonComponent";
import "./common/commonCSS.css";
import { Button } from "antd";
// import LifeCycle from "./lifeCycle";
// import Communication from "./communication";
// import PortalDemo from "./portals";
import ReactHooks from "./hooks";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="divBase">
          <p> 常用控件 </p>
          <ClearConsole />
        </div>
        <div>
          <p>antd 测试</p>
          <Button type="default">按钮</Button>
        </div>
        {/* <LifeCycle /> */}
        {/* <Communication /> */}
        {/* <PortalDemo /> */}
        <ReactHooks />
      </>
    );
  }
}
