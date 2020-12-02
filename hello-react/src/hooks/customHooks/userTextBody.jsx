import React from "react";
import { useCustomHooks } from "./useCustomHooks";

export default function UserTextBody() {
  const isOnLine = useCustomHooks("userTextBody");
  return (
    <div>
      输入区域
      <div
        style={{
          width: 200,
          height: 200,
          padding: 5,
          backgroundColor: isOnLine ? "white" : "gray",
        }}
      >
        请输入...
      </div>
    </div>
  );
}
