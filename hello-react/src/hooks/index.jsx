import React, { useState } from "react";
import UseSate from "./useState";
import UseEffect from "./useEffect";
import UseRef from "./useRef";
import UseImperativeHandle from "./useImperativeHandle";
import CustomHooks from "./customHooks";
import UseCallback from "./useCallback";
import UseMemo from "./useMemo";

const defaultComponnetsNames = [
  "useState",
  "useEffect",
  "useCustom",
  "useRef",
  "useImperativeHandle",
  "useCallBack",
  "useMemo",
];

export default function ReactHooks() {
  const [updateTime, setUpdateTime] = useState(1);
  const [funComponentsFlag, setfunComponentsFlag] = useState("useState");

  function getFunComponentBtn() {
    return defaultComponnetsNames.map((name) => {
      return (
        <button
          key={name}
          className="btnBase"
          onClick={() => {
            setfunComponentsFlag(funComponentsFlag === name ? "" : name);
          }}
        >
          {funComponentsFlag === name ? "关闭" : "启用"}
          {name}
        </button>
      );
    });
  }

  function getUpdateIndexBtn() {
    return (
      <>
        <span>index更新次数:{updateTime}</span>
        <button
          className="btnBase"
          onClick={() => {
            setUpdateTime(updateTime + 1);
          }}
        >
          更新index
        </button>
      </>
    );
  }

  function getFunComponentByFlag() {
    switch (funComponentsFlag) {
      case defaultComponnetsNames[0]:
        return <UseSate />;
      case defaultComponnetsNames[1]:
        return <UseEffect updateTime={updateTime} />;
      case defaultComponnetsNames[2]:
        return <CustomHooks />;
      case defaultComponnetsNames[3]:
        return <UseRef />;
      case defaultComponnetsNames[4]:
        return <UseImperativeHandle />;
      case defaultComponnetsNames[5]:
        return <UseCallback />;
      case defaultComponnetsNames[6]:
        return <UseMemo />;
      default:
        return null;
    }
  }

  return (
    <>
      <h1>React-Hooks</h1>
      {getUpdateIndexBtn()}
      <div className="divBase">{getFunComponentBtn()}</div>
      <div className="divBase">{getFunComponentByFlag()}</div>
    </>
  );
}
