import { memo } from "react";

export const StepInput = memo(function StepInput({ step, onChangeStep }) {
  return (
    <div>
      <input
        value={step}
        onChange={(event) => onChangeStep(Number(event.target.value))}
      />
    </div>
  );
});
