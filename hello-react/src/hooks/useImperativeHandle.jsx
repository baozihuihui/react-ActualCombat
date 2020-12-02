import React, { useRef, useState, useImperativeHandle } from "react";

const Child = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const globalAttr = useRef(0);
  const [clickTime, setClickTime] = useState(0);
  useImperativeHandle(ref, () => {
    return {
      globalAttr,
      addClickTime: () => {
        setClickTime(clickTime + 1);
      },
      focus: () => {
        inputRef.current.focus();
      },
    };
  });
  return (
    <div>
      <p>父组件点击次数值：{clickTime}</p>
      <p>全局变量值：{globalAttr.current}</p>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          globalAttr.current += 1;
        }}
      >
        更新子组件全局变量
      </button>
    </div>
  );
});

export default function UseImperativeHandle() {
  const childRef = useRef(null);
  return (
    <>
      <Child ref={childRef} />
      <button
        onClick={() => {
          childRef.current.focus();
        }}
      >
        获取子节点输入框焦点
      </button>
      <button
        onClick={() => {
          childRef.current.addClickTime();
        }}
      >
        增加子组件添加值
      </button>
      <button
        onClick={() => {
          console.log(childRef.current.globalAttr);
        }}
      >
        输出子组件全局变量
      </button>
    </>
  );
}
