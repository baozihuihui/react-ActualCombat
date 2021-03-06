import React, { useState } from "react";

const initState = {
  state1: "haha",
  state2: "hehe",
};

export default function UseState() {
  const [count, setCount] = useState(0);
  const [mixState, setMixState] = useState(initState);

  function setMixStateWithError() {
    setMixState({ state1: "heihei" }); // 这样就没有state2了
  }
  function setMixStateWithSuccess() {
    setMixState({ ...mixState, state1: "heihei" });
  }

  function testUseStateAsync() {
    setCount(count + 1);
    console.log("count:", count); // 同样是一个异步
  }

  function addWays(way) {
    if (way === "newState") {
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    } else if (way === "func") {
      setCount((s) => s + 1);
      setCount((s) => s + 1);
      setCount((s) => s + 1);
      setCount((s) => s + 1);
      setCount((s) => s + 1);
    }
  }

  return (
    <div>
      <p>useState</p>
      <h2>点击次数:{count}</h2>
      <button
        onClick={() => {
          testUseStateAsync();
        }}
      >
        点击
      </button>
      <button
        onClick={() => {
          addWays("newState");
        }}
      >
        通过 setState(state+1)点击5次
      </button>
      <button
        onClick={() => {
          addWays("func");
        }}
      >
        通过{`setState(s=>s+1)`}点击5次
      </button>
      <p>混合State(mixState)</p>
      <p>mixState.state1:{mixState.state1}</p>
      <p>mixState.state2:{mixState.state2}</p>
      <button
        onClick={() => {
          setMixStateWithSuccess();
        }}
      >
        成功修改
      </button>
      <button
        onClick={() => {
          setMixStateWithError();
        }}
      >
        错误修改
      </button>
    </div>
  );
}
