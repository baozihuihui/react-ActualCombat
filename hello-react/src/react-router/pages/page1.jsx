import React from "react";

export default class Page extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return <div>1</div>;
  }
}
