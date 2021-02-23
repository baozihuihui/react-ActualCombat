import { CustomRedux, applyMiddleWare } from "./customRedux";

function reduce(action, state = { num: 0 }) {
  switch (action.type) {
    case "REDUX/ADD":
      return (state = { ...state, num: state.num + 1 });
    case "REDUX/MULE":
      return (state = { ...state, num: state.num - 1 });
    default:
      return state;
  }
}

const Store = CustomRedux(reduce, applyMiddleWare(thunk, logger));

function logger(api) {
  // 接收 redux 提供的 dispatch 工具
  return (next) => {
    // 接收组件传入的 actions
    return (action) => {
      console.log(action.type + "执行了");
      return next(action);
    };
  };
}

function thunk({ getState, dispatch }) {
  // 接收 redux 提供的 dispatch 工具
  return (next) => {
    // 接收组件传入的 actions
    return (action) => {
      // 根据 组件传入内容不容 决定返回内容
      if (typeof action === "function") {
        return action(dispatch, getState);
      } else {
        return next(action);
      }
    };
  };
}

export default Store;
