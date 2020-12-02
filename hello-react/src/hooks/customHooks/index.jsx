import React, { useState, useCallback } from "react";
import UserList from "./userList";
// import UserTextBody from "./userTextBody";
import { useCustomReducer as usecustomreducer } from "./useCustomHooks";
import { useCustomHooks } from "./useCustomHooks";
import reducer from "./reducer";

const defaultState = {
  selectUserId: 1,
  userList: [
    { id: 1, name: "张三", isOnline: false },
    { id: 2, name: "李四", isOnline: false },
    { id: 3, name: "王五", isOnline: false },
  ],
};

export default function CustomHooks() {
  const [state, dispatch] = usecustomreducer(reducer, defaultState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useCustomHooks("CustomHooks", useCallback(updateUserStatus, []));

  function addUser(user) {
    dispatch("add", user);
  }

  function selectUserById(userId) {
    dispatch("selectUser", userId);
  }

  function updateUserStatus() {
    dispatch("updateUserStatus");
  }

  function removeUserById(userId) {
    dispatch("removeByUserId", userId);
  }
  return (
    <>
      <p>自定义组件</p>
      <UserList
        userList={state.userList}
        selectUserId={state.selectUserId}
        selectUserById={selectUserById}
        removeUserById={removeUserById}
      />
      <AddUserInput addUser={addUser} />
      {/* <UserTextBody /> */}
    </>
  );
}

function AddUserInput({ addUser }) {
  const [name, setName] = useState("");

  function checkAndAddUser() {
    if (name.trim() === "") {
      console.log("添加名称为空！");
      return;
    }
    addUser({ id: Math.random(), name });
    setName("");
  }

  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="请输入姓名"
      />
      <button
        onClick={() => {
          checkAndAddUser();
        }}
      >
        添加
      </button>
    </>
  );
}
