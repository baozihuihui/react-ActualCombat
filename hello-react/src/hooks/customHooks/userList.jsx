import React from "react";

export default function UserList(props) {
  const { userList, selectUserId } = props;
  const { selectUserById, removeUserById } = props;

  return (
    <>
      <p>用户列表</p>
      <ul>
        {userList.map((user) => {
          return (
            <li
              style={{
                margin: 2,
                padding: 2,
                cursor: "pointer",
                height: selectUserId === user.id ? 20 : 15,
                fontSize: 10,
              }}
              key={user.id}
              onClick={() => {
                selectUserById(user.id);
              }}
            >
              <span
                style={{
                  fontSize: selectUserId === user.id ? 20 : 15,
                  color: user.isOnline ? "green" : "blue",
                }}
              >
                {user.name}
              </span>
              |
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeUserById(user.id);
                }}
              >
                移除
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
