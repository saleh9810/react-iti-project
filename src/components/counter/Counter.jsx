import "./Counter.css";
import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  const minusCount = () => {
    if (count < 1) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="cointer">
      <h2 className="count"> {count} </h2>
      <button onClick={plusCount} className="plus">
        +
      </button>
      <button onClick={minusCount} className="minus">
        -
      </button>
      <button onClick={resetCount} className="reset">
        reset
      </button>
    </div>
  );
};

export default Counter;
