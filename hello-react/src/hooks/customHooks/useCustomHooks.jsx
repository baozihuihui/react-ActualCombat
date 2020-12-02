import { useState, useEffect } from "react";

export function useCustomHooks(components, updateUserStatus) {
  useEffect(() => {
    console.log(components, "执行 自定义Hooks的useEffect");
    const timer = setTimeout(() => {
      updateUserStatus();
    }, 1000);
    return () => {
      console.log(components, "卸载 自定义Hooks的useEffect");
      clearTimeout(timer);
    };
  }, [components, updateUserStatus]);
}

export function useCustomReducer(reducer, initState) {
  const [state, setState] = useState(initState);
  function dispatch(action, payload) {
    const newState = reducer(action, state, payload);
    setState(newState);
  }

  return [state, dispatch];
}
