import React from "react";

const ProviderContext = React.createContext();

const connect = (mapStateToProps, mapDispatchToProps) => (WarppComponent) => {
  return class component extends React.Component {
    static contextType = ProviderContext;
    state = { reduxProps: {} };
    componentDidMount() {
      const { getState, dispatch, subscribe } = this.context;
      // 初始化更新
      this.update(getState, dispatch);
      // 添加监听 用于 store 数据发生变化后，触发子组件更新
      subscribe(() => {
        this.update(getState, dispatch);
      });
    }

    update = (getState, dispatch) => {
      const reduxState = mapStateToProps(getState(), this.props);
      let reduxDispatch;
      if (typeof mapDispatchToProps === "object") {
        reduxDispatch = bindActionCreators(mapDispatchToProps, dispatch);
      } else if (typeof mapDispatchToProps === "function") {
        reduxDispatch = mapDispatchToProps(dispatch, this.props);
      } else {
        reduxDispatch = { dispatch };
      }
      this.setState({
        reduxProps: {
          ...reduxState,
          ...reduxDispatch,
        },
      });
    };

    render() {
      return <WarppComponent {...this.state.reduxProps} {...this.props} />;
    }
  };
};

function bindActionCreator(fn, dispatch) {
  return (...args) => dispatch(fn(...args));
}

function bindActionCreators(obj, dispatch) {
  let result = {};
  for (let i in obj) {
    result[i] = bindActionCreator(obj[i], dispatch);
  }
  return result;
}

class ReactReduxProvider extends React.Component {
  render() {
    return (
      <ProviderContext.Provider value={this.props.value}>
        {this.props.children}
      </ProviderContext.Provider>
    );
  }
}

export { connect, ReactReduxProvider };
