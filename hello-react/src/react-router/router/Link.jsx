import React from "react";
import ReactRouterContext from "./ReactRouterContext";

export default class Page extends React.Component {
  click = (event, context) => {
    event.preventDefaule();
    context.history.push(this.props.to);
  };

  render() {
    const { to, children } = this.props;
    return (
      <ReactRouterContext.Consumer>
        {(context) => {
          return (
            // 假设这里的 this.props.to 是一个简单的 string
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href={to} onClick={(e) => this.click(e, context)}>
              {children}
            </a>
          );
        }}
      </ReactRouterContext.Consumer>
    );
  }
}
