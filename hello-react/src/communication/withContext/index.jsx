import React, { Component } from "react";
import * as Store from "./contextStore";

import ClassComponent from "./classComp";
import FunctionComponent from "./functionComp";
import SimpleComponent from "./simpleComp";

const { ThemeContext, UserInfoContext } = Store;
export default class ContextRoot extends Component {
  constructor() {
    super();
    const { Theme, UserInfos } = Store;
    this.state = {
      themeContext: {
        value: Theme.light,
        onChange: this.onChangeTheme,
      },
      userInfoContext: {
        value: UserInfos[1],
        onChange: this.onChangeUserInfo,
      },
    };
  }

  onChangeTheme = (value) => {
    this.setState((state) => ({
      themeContext: { ...state.themeContext, value },
    }));
  };

  onChangeUserInfo = (value) => {
    this.setState((state) => ({
      userInfoContext: { ...state.userInfoContext, value },
    }));
  };

  render() {
    return (
      <div className="divBase">
        <ThemeProvider>
          <USerInfoProvider>
            <SimpleComponent />
            <ClassComponent />
            <FunctionComponent />
          </USerInfoProvider>
        </ThemeProvider>
      </div>
    );
  }
}

class ThemeProvider extends React.Component {
  constructor() {
    super();
    const { Theme } = Store;
    this.state = {
      themeContext: {
        value: Theme.light,
        onChange: this.onChangeTheme,
      },
    };
  }

  onChangeTheme = (value) => {
    this.setState((state) => ({
      themeContext: { ...state.themeContext, value },
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.themeContext}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

class USerInfoProvider extends React.Component {
  constructor() {
    super();
    const { UserInfos } = Store;
    this.state = {
      userInfoContext: {
        value: UserInfos[1],
        onChange: this.onChangeUserInfo,
      },
    };
  }

  onChangeUserInfo = (value) => {
    this.setState((state) => ({
      userInfoContext: { ...state.userInfoContext, value },
    }));
  };

  render() {
    return (
      <UserInfoContext.Provider value={this.state.userInfoContext}>
        {this.props.children}
      </UserInfoContext.Provider>
    );
  }
}
