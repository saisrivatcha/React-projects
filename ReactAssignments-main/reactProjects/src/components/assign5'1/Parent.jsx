import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  // State for counter
  const [counter, setCounter] = useState(0);

  // Increment function
  const handleIncrement = () => setCounter((prev) => prev + 1);

  // Decrement function (prevents negative values)
  const handleDecrement = () => setCounter((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="container mt-5 p-5 bg-info text-center rounded-3 shadow-lg">
      <h1 className="display-3 text-danger fw-semibold">Parent Component</h1>

      {/* Counter Display */}
      <p className="lead fw-semibold fs-2 text-dark bg-warning px-4 py-2 mx-auto rounded">
        Counter: <span className="fw-bold">{counter}</span>
      </p>

      {/* Pass props to Child Component */}
      <Child counter={counter} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
    </div>
  );
}

export default Parent;
