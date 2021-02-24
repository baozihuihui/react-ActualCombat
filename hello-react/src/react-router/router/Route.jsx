import React from "react";
import ReactRouterContext from "./ReactRouterContext";
import matchPath from "./matchPath";

export default class Route extends React.Component {
  render() {
    return (
      <ReactRouterContext.Consumer>
        {(context) => {
          const location = this.props.location || context.location;
          const {
            computedMatch,
            path,
            children,
            component,
            render,
          } = this.props;
          const match = computedMatch
            ? computedMatch // <Switch /> 调用 <Route/>时使用的 match
            : path
            ? matchPath(location.pathname, this.props)
            : context.match;

          //  children, component, render 能接收到(history, location match),
          // 所以我们定义在props，传下去
          const props = { ...context, location, match };

          return (
            // 组件 接收的 context  永远是最近的 context,防止嵌套组件拿到的父组件命中时的context
            <ReactRouterContext.Provider value={props}>
              {
                // match 渲染children, component, render 或者null
                // match的时候如果children存在：function或者children本身
                // 不match children 或者 null
                // children是和匹配无关
                match
                  ? children
                    ? typeof children === "function"
                      ? children(props)
                      : children
                    : component
                    ? // 这里只能用 createElement，cloneElement 不能完全满足要求(需要做大量判断和准备)
                      React.createElement(component, props)
                    : render
                    ? render(props)
                    : null
                  : typeof children === "function"
                  ? children(props)
                  : null
              }
            </ReactRouterContext.Provider>
          );
        }}
      </ReactRouterContext.Consumer>
    );
  }
}
