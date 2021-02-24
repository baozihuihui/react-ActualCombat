import React from "react";
import ReactRouterContext from "./ReactRouterContext";
import matchPath from "./matchPath";

export default class Switch extends React.Component {
  render() {
    return (
      <ReactRouterContext.Consumer>
        {(context) => {
          const location = this.props.location || context.location;
          let match = null,
            element;
          React.Children.forEach(this.props.children, (child) => {
            if (match === null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path;
              /**
               * 检查 path 是为了处理 location.pathname 未命中 所有有 path/from 的 <Route /> 时， <Switch/> 默认展示第一个无path的
               * */
              match = path
                ? matchPath(location.pathname, { ...child.props, path })
                : context.match;
            }
          });
          return match
            ? React.cloneElement(element, { location, computedMatch: match })
            : null;
        }}
      </ReactRouterContext.Consumer>
    );
  }
}
