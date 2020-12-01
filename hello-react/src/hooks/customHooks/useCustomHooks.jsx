import { useState, useEffect } from "react";

export default function useCustomHooks() {
  const [isOnLine, setIsOnLine] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOnLine(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return isOnLine;
}
