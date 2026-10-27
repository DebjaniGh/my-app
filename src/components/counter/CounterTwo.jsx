import { useReducer } from "react";

export function CounterTwo() {
  // reducer fn
  function countReducer(state, action) {
    switch (action.type) {
      case "increment": // return a new state object rather than mutating the current state obj
        return {
          ...state,
          count: state.count + state.step,
        };

      case "incrementBy":
        return {
          ...state,
          count: state.count + action.payload,
        };
      case "decrement":
        return {
          ...state,
          count: state.count - state.step,
        };

      case "reset":
        return { count: 0, step: 1 };

      case "setCount":
        return {
          ...state,
          count: action.payload,
        };

      case "setStep":
        return { ...state, step: action.payload };

      default:
        return state;
    }
  }

  // dispatch = action that triggers the useReducer
  const [state, dispatch] = useReducer(countReducer, { count: 0, step: 1 });

  return (
    <div>
      <label>Step: </label>
      <input
        value={state.step}
        onChange={(event) =>
          dispatch({ type: "setStep", payload: Number(event.target.value) })
        }
      />
      <label>Change Count to: </label>
      <input
        value={state.count}
        onChange={(event) =>
          dispatch({ type: "setCount", payload: Number(event.target.value) })
        }
      />
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "incrementBy", payload: 10 })}>
        Increment by 10
      </button>
    </div>
  );
}
