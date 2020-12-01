import React, { Component } from "react";
// import { SimpleContext } from "./contextStore";

export default class SimpleComponent extends Component {
  componentDidUpdate() {
    console.log("SimpleComponent componentDidUpdate");
  }

  render() {
    return <div className="divBase">不消费任何 Context！</div>;
  }
}
