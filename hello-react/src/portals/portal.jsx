import { Component } from "react";
import ReactDOM from "react-dom";

export default class Portal extends Component {
  render() {
    return this.props.usePortal
      ? ReactDOM.createPortal(this.props.children, this.props.targetDiv)
      : this.props.children;
  }
}
