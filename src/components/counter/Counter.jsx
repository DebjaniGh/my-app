import { useCallback, useState, useEffect } from "react";
import { StepInput } from "./StepInput";
import { CounterDisplay } from "./CounterDisplay";
import { CounterBtns } from "./CounterButtons";

export function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const status = count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero";

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - step);
  }, [step]); // useCallback takes an array of dependencies as parameter

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <StepInput step={step} onChangeStep={setStep} />
      <CounterDisplay count={count} status={status} />
      <div>
        <CounterBtns
          onDecrement={decrement}
          onReset={reset}
          onIncrement={increment}
        />
      </div>
    </div>
  );
}
