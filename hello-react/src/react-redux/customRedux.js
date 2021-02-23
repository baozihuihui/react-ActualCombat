function CustomRedux(reducer, enhancer) {
  if (typeof enhancer === "function") {
    return enhancer(CustomRedux)(reducer);
  }

  let state = reducer({ type: "REDUX/INIT" });
  let subFunctionList = [];

  function getState() {
    return state;
  }
  // 分发函数
  function dispatch(action) {
    state = reducer(action, state);
    subFunctionList.forEach((fn) => {
      fn(state);
    });
  }
  // 订阅函数
  function subscribe(fn) {
    subFunctionList.push(fn);
  }
  return { getState, dispatch, subscribe };
}

function compose(...funs) {
  if (funs.length === 0) {
    return (arg) => arg;
  }
  if (funs.length === 1) {
    return funs[0];
  }
  return funs.reduce((a, b) => {
    return (...arg) => {
      return a(b(...arg));
    };
  });
}

function applyMiddleWare(...middlewares) {
  return (customRedux) => (reducer) => {
    const store = customRedux(reducer);

    let dispatch = () => {
      throw new Error("初始化阶段 dispatch 不该被调用");
    };

    const middleApi = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args),
    };
    // 为 middleWare 提供 store 参数,获取 保留了 store 接口的 回调函数
    const chain = middlewares.map((middleware) => middleware(middleApi));
    // 将 dispatch 进行强化，完成多个middleware 的嵌套
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch,
    };
  };
}

export { CustomRedux, applyMiddleWare };
