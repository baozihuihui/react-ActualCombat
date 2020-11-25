import React from "react";

const Theme = {
  light: {
    light: "on",
  },
  dark: {
    light: "off",
  },
};

const UserInfos = [
  { name: "wanger", age: "18" },
  { name: "zhangsan", age: "19" },
];

const ThemeContext = React.createContext({
  value: Theme.dark,
  onChange: () => {
    console.log("超出作用域！");
  },
});

const UserInfoContext = React.createContext({
  value: UserInfos[0],
  onChange: () => {
    console.log("超出作用域！");
  },
});

export { Theme, UserInfos, ThemeContext, UserInfoContext };
