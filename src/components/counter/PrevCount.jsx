import { useState, useRef, useEffect } from "react";

export function PrevCount() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const onIncrement = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Current value: {count}</p>
      <p>Previous value: {prevCount.current}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}
