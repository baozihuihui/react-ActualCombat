import React from "react";

export function ClearConsole() {
  return (
    <button
      className="btnBase"
      onClick={() => {
        console.clear();
      }}
    >
      清空控制台
    </button>
  );
}
