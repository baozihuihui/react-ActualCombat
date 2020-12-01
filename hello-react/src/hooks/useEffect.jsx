import React, { useState, useEffect } from "react";

export default function UseEffect(props) {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    return () => {
      document.title = "React";
      console.log("已经移除useEffect! -- 1");
    };
  });

  useEffect(() => {
    console.log(`index update ${props.updateTime} times`);
    return () => {
      console.log("已经移除UseEffect! -- 2");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parseInt(props.updateTime / 5)]);

  return (
    <div>
      <p>useEffect</p>
      <p>点击次数：{count}</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  );
}
