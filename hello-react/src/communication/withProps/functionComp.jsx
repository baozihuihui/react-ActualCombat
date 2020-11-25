import React from "react";
export default function FunctionComponent(props) {
  const onBtnClick = () => {
    props.clearClickNum("FunctionComponent");
  };

  return (
    <>
      <p>函数式组件</p>
      <p>点击次数：{props.clickNum}</p>
      <button onClick={onBtnClick}>清空父组件点击次数</button>
    </>
  );
}
