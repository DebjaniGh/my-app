import { memo } from "react";

export const CounterBtns = memo(function CounterBtns({
  onDecrement,
  onReset,
  onIncrement,
}) {
  console.log("CounterBtns rendered");
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
});
