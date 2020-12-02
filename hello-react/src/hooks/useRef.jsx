import React, { Component, useRef, useState } from "react";

class Child extends Component {
  constructor() {
    super();
    this.InputRef = React.createRef();
  }
  render() {
    return (
      <>
        <div>这是一个子组件</div>
        <input type="password" ref={this.InputRef} />
      </>
    );
  }
}

export default function UseRef() {
  const [fresh, setFresh] = useState(false);
  // 获取DOM实例
  const inputRef = useRef(null);
  // 获取子组件实例
  const childRef = useRef(null);
  // 保存组件全局变量
  const globalAttr = useRef(0);
  return (
    <div>
      <input type="text" name="input" ref={inputRef} />
      <Child ref={childRef} />
      <p>组件全局变量：{globalAttr.current}</p>

      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        input获取焦点
      </button>
      <button
        onClick={() => {
          console.log(childRef);
          childRef.current.InputRef.current.focus();
        }}
      >
        输出子组件Ref,并让子组件输入框获取焦点
      </button>
      <button
        onClick={() => {
          globalAttr.current += 1;
          console.log(`更新全局变量为:${globalAttr.current}，不会触发渲染！`);
        }}
      >
        更新全局变量
      </button>
      <button
        onClick={() => {
          setFresh(!fresh);
        }}
      >
        更新组件
      </button>
    </div>
  );
}
