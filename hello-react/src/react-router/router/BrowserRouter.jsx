import React from "react";
import ReactRouterContext from "./ReactRouterContext";
import { createBrowserHistory as createHistory } from "history";

export default class BrowserRouter extends React.Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }

  constructor(props) {
    super(props);
    // 构建 history
    this.history = createHistory(props);
    this.state = {
      location: this.history.location,
    };
    // 向 history 添加 location 监听，触发 setState 组件更新
    // 不放在生命周期中：注册监听要早于组件的挂载，因为可能子组件中出现 <Redirect/> 导致 history 发生替换，路由变化。
    this.unlisten = this.history.listen((location) => {
      this.setState({ location });
    });
  }

  // 组件卸载 取消监听
  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    return (
      <ReactRouterContext.Provider
        value={{
          context: {
            history: this.history,
            location: this.state.location,
            match: BrowserRouter.computeRootMatch(this.location.pathname),
          },
        }}
      >
        {this.props.children}
      </ReactRouterContext.Provider>
    );
  }
}
