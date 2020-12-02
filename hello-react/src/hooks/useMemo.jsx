import React, { useState, useMemo, useRef } from "react";

function calcNum(count, title) {
  console.log(title, "calcNum 被执行");
  for (let i = 0; i < 100; i++) {
    count = count + 1;
  }
  return count;
}

function NoneChild(props) {
  console.log(`NoneChild 更新 ${props.tittle || " "} `);
  return <p>无意义组件</p>;
}

function Child(props) {
  const { name, age } = props.info;
  console.log(`Child 更新 ${props.tittle || " "} `);
  return (
    <p>
      姓名：{name} 年龄：{age}
    </p>
  );
}

const ChildWithMemo = React.memo(Child);
const NoneChildWithMemo = React.memo(NoneChild);

export default function UseMemo() {
  console.log(new Array(5).join("--"), "分割线");
  console.log("UseMemo 更新！");
  const userInfo = {
    name: "张三",
    age: "18",
  };
  const [clickTime, setClickTime] = useState(0);
  const [updateNum, setUpdateNum] = useState(0);
  const userInfoRef = useRef(userInfo);
  const total = calcNum(clickTime, "普通调用");
  const totalWithMemo = useMemo(() => {
    return calcNum(clickTime, "通过useMemo调用");
  }, [clickTime]);

  const userInfoWithUseMemo = useMemo(() => {
    return {
      name: "张三",
      age: "18",
    };
  }, []);

  const addClcikTime = () => {
    setClickTime((s) => s + 1);
  };

  const forceUpdate = () => {
    setUpdateNum((s) => s + 1);
  };

  return (
    <div>
      <p>useMemo</p>
      <div>
        <p>总和 不使用useMemo：{total}</p>
        <p>总和 使用useMemo：{totalWithMemo}</p>
        <button onClick={addClcikTime}>加 100</button>
      </div>
      <p>
        主动更新次数：{updateNum}
        {"    "}
        <button onClick={forceUpdate}>主动更新</button>
      </p>
      <div>
        <NoneChild tittle={"default NoneChild"} />
        <NoneChildWithMemo tittle={"React.memo NoneChild"} />
        <Child info={userInfo} tittle={"default Child userInfo default"} />
        <ChildWithMemo
          info={userInfo}
          tittle={"React.Memo Child userInfo default "}
        />
        <Child
          info={userInfoWithUseMemo}
          tittle="default Child userInfo useMemo"
        />
        <ChildWithMemo
          info={userInfoWithUseMemo}
          tittle={"React.Memo Child userInfo useMemo"}
        />
        <Child
          info={userInfoRef.current}
          tittle="default Child userInfo useRef"
        />
        <ChildWithMemo
          info={userInfoRef.current}
          tittle={"React.Memo Child userInfo useRef"}
        />
      </div>
    </div>
  );
}
