import * as React from "react";
import { ClearConsole } from "./common/commonComponent";
import "./common/commonCSS.css";
// import LifeCycle from "./lifeCycle";
// import Communication from "./communication";
// import PortalDemo from "./portals";
// import ReactHooks from "./hooks";
// import ReduxDemo from "./redux";
import ReactReduxDemo from "./react-redux";
export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="divBase">
          <p> 常用控件 </p>
          <ClearConsole />
        </div>
        <ReactReduxDemo />
        {/* <LifeCycle /> */}
        {/* <Communication /> */}
        {/* <PortalDemo /> */}
        {/* <ReactHooks /> */}
      </>
    );
  }
}
