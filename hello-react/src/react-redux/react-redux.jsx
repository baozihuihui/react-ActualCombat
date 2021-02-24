import React, {
  useContext,
  useMemo,
  useLayoutEffect,
  useState,
  // useReducer,
} from "react";

const ProviderContext = React.createContext();

const connectWithHooks = (mapStateToProps, mapDispatchToProps) => (
  WarppComponent
) => (props) => {
  const store = useContext(ProviderContext);
  const { getState, dispatch, subscribe } = store;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reduxState = useMemo(() => mapStateToProps(getState()), [getState()]);
  let reduxDispatch = {};
  if (typeof mapDispatchToProps === "object") {
    reduxDispatch = useMemo(
      () => bindActionCreators(mapDispatchToProps, dispatch),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [store]
    );
  } else if (typeof mapDispatchToProps === "function") {
    reduxDispatch = useMemo(
      () => mapDispatchToProps(dispatch, this.props),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [store]
    );
  } else {
    reduxDispatch = { dispatch };
  }
  // 注入一个可执行组件更新的 reducer,或者是一个useState
  // const [, forceUpdate] = useReducer(null);
  const [state, setState] = useState(0);

  /**
   * ? 添加注册监听事件
   * ! 不使用 useEffect,是因为 useEffect 是一个异步的回调，防止丢失更新。
   *  */
  useLayoutEffect(() => {
    subscribe(() => {
      setState(state + 1);
      // forceUpdate();
    });
    return () => {
      // unSubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getState()]);
  return <WarppComponent {...props} {...reduxState} {...reduxDispatch} />;
};

const connect = (mapStateToProps, mapDispatchToProps) => (WarppComponent) => {
  return class component extends React.Component {
    static contextType = ProviderContext;

    constructor(props, context) {
      super(props);
      this.reduxState = {};
      this.reduxDispatch = {};
      // 在子组件挂载前获取数据并完 props 的成复制
      this.update(context);
    }

    componentDidMount() {
      const { getState, dispatch, subscribe } = this.context;
      // 初始化更新
      this.update(getState, dispatch);
      // 添加监听 用于 store 数据发生变化后，触发子组件更新
      this.unSubscribe = subscribe(() => {
        this.update(getState, dispatch);
        this.forceUpdate();
      });
    }

    // 防止在组件已卸载后仍执行本组件的更新操作
    componentWillUnmount() {
      if (this.unSubscribe) {
        this.unSubscribe();
      }
    }

    update = (context) => {
      const { getState, dispatch } = context || this.context;
      this.reduxState = mapStateToProps(getState(), this.props);
      if (typeof mapDispatchToProps === "object") {
        this.reduxDispatch = bindActionCreators(mapDispatchToProps, dispatch);
      } else if (typeof mapDispatchToProps === "function") {
        this.reduxDispatch = mapDispatchToProps(dispatch, this.props);
      } else {
        this.reduxDispatch = { dispatch };
      }
    };

    render() {
      return (
        <WarppComponent
          {...this.props}
          {...this.reduxState}
          {...this.reduxDispatch}
        />
      );
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

export { connect, connectWithHooks, ReactReduxProvider };
