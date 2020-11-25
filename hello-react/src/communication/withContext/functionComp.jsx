import React from "react";
import * as Store from "./contextStore";
import "../../common/commonCSS.css";

export default function functionComp() {
  const { ThemeContext, UserInfoContext } = Store;

  const onThemeBtnClick = (value, callback) => {
    const { light, dark } = Store.Theme;
    if (value === light) {
      callback(dark);
    } else {
      callback(light);
    }
  };

  const onUserInfoBtnClick = (value, callback) => {
    const { UserInfos } = Store;
    if (value === UserInfos[0]) {
      callback(UserInfos[1]);
    } else {
      callback(UserInfos[0]);
    }
  };

  return (
    <ThemeContext.Consumer>
      {({ value: theme, onChange: themeOnchange }) => (
        <UserInfoContext.Consumer>
          {({ value: userInfo, onChange: userInfoOnchange }) => (
            <div className="divBase">
              <h1>函数式组件 Context 应用</h1>
              <h2> 上级组件声明的 ThemeContext {JSON.stringify(theme)}</h2>
              <button
                onClick={() => {
                  onThemeBtnClick(theme, themeOnchange);
                }}
              >
                变更ThemeConText
              </button>
              <h2>上级组件声明的 UserInfoContext {JSON.stringify(userInfo)}</h2>
              <button
                onClick={() => {
                  onUserInfoBtnClick(userInfo, userInfoOnchange);
                }}
              >
                变更UserInfoConText
              </button>
            </div>
          )}
        </UserInfoContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}
