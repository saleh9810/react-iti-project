import "./App.css";
import Counter from "./components/counter/Counter";
import { useState } from "react";

function App() {
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
    <div className="App">
      <Counter
        plusCount={plusCount}
        minusCount={minusCount}
        resetCount={resetCount}
        count={count}
      />
    </div>
  );
}

export default App;
