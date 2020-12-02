import React, { useState, useCallback } from "react";

const Child = (props) => {
  console.log("Child" + props.title + " 更新！");
  return <button onClick={props.addClick}>{props.title}子组件 +1</button>;
};

const WithMemoChild = React.memo(Child);

export default function UseCallback() {
  console.log(new Array(5).join("--"), "分割线");
  console.log("UseCallback 更新！");
  const [clickTime, setClickTime] = useState(0);
  const [updateNum, setUpdateNum] = useState(0);

  const forceUpdate = () => {
    setUpdateNum((s) => s + 1);
  };

  const addClickWithFunc = () => {
    setClickTime((s) => s + 1);
  };

  const addClickWithAttr = () => {
    setClickTime(clickTime + 1);
  };
  // 不添加依赖值，使用函数更新方式仍能正确更新
  const addClick2 = useCallback(addClickWithFunc, []);
  // 不添加依赖值，使用变量更新，会因为闭包，而永远拿到第一次的clickTime
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addClick3 = useCallback(addClickWithAttr, []);
  // 添加依赖值后，会主动更新被记忆的函数
  const addClick4 = useCallback(addClickWithAttr, [clickTime]);

  return (
    <div>
      <p>useCallBack</p>
      <p>点击次数：{clickTime}</p>
      <p>
        主动更新次数：{updateNum}
        {"   "}
        <button onClick={forceUpdate}>主动更新</button>
      </p>
      <button onClick={addClickWithFunc}>不使用useCallback +1</button>
      <button onClick={addClick2}>使用useCallback 函数值+1 不添加依赖</button>
      <button onClick={addClick3}>使用useCallback 变量值+1 不添加依赖值</button>
      <button onClick={addClick4}>使用useCallback 变量值+1 添加依赖值</button>
      <div>
        <p>不使用 memo的</p>
        <Child title="不使用useCallback 子组件" addClick={addClickWithFunc} />
        <Child title="不添加依赖 使用函数更新 子组件" addClick={addClick2} />
        <Child title="不添加依赖 使用变量更新 子组件" addClick={addClick3} />
        <Child title="添加依赖 使用变量更新 子组件" addClick={addClick4} />
      </div>
      <div>
        <p>使用 memo的</p>
        <WithMemoChild
          title="withMemo 不使用useCallback 子组件"
          addClick={addClickWithFunc}
        />
        <WithMemoChild
          title="withMemo 不添加依赖 使用函数更新 子组件"
          addClick={addClick2}
        />
        <WithMemoChild
          title="withMemo 不添加依赖 使用变量更新 子组件"
          addClick={addClick3}
        />
        <WithMemoChild
          title="withMemo 添加依赖 使用变量更新 子组件"
          addClick={addClick4}
        />
      </div>
    </div>
  );
}
