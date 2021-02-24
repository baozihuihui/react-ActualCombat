import React from "react";
import ReactRouterContext from "./ReactRouterContext";
import matchPath from "./matchPath";

export default class Switch extends React.Component {
  render() {
    return (
      <ReactRouterContext.Component>
        {(context) => {
          const location = this.props.location || context.local;
          let match, element;
          React.Children.forEach(this.props.children, (child) => {
            if (match === null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path;
              match = path
                ? matchPath(path, { ...child.props, path })
                : context.matchPath;
            }
            match = matchPath(child.props.path, this.props);
          });
          return match
            ? React.cloneElement(element, { location, computedMatch: match })
            : null;
        }}
      </ReactRouterContext.Component>
    );
  }
}
