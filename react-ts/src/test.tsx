import * as React from "react";

export interface IAppProps {}

export interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  static getDerivedStateFromProps(nextProps: IAppProps, prevState: IAppState) {
    return prevState;
  }

  public render() {
    return <div></div>;
  }
}
