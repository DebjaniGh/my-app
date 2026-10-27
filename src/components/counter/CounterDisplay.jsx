import { memo } from "react";

export const CounterDisplay = memo(function CounterDisplay({ count, status }) {
  console.log("Counter display rendered");
  return (
    <div>
      <p>{count}</p>
      <p>{status}</p>
    </div>
  );
});
