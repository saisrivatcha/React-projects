import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";

function Check() {
  const { counter, setCounter } = useContext(counterContextObj);
  return (
    <div className="text-center">
      <h1 className="text-info">Test counter</h1>
      <button
        className="btn btn-warning"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
      <h1>Counter:{counter}</h1>
    </div>
  );
}

export default Check;
