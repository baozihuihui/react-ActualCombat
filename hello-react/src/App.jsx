import * as React from "react";
import { ClearConsole } from "./common/commonComponent";
import "./common/commonCSS.css";
// import LifeCycle from "./lifeCycle";
// import Communication from "./communication";
// import PortalDemo from "./portals";
// import ReactHooks from "./hooks";
// import ReduxDemo from "./redux";
import ReactReduxDemo from "./react-redux";
// import ReactRouterDemo from "./react-router";
export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="divBase">
          <p> 常用控件 </p>
          <ClearConsole />
        </div>
        <ReactReduxDemo />
        {/* <ReactRouterDemo /> */}
        {/* <LifeCycle /> */}
        {/* <Communication /> */}
        {/* <PortalDemo /> */}
        {/* <ReactHooks /> */}
      </>
    );
  }
}
