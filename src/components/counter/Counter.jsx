import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../redux/actions";

const Counter = () => {

  const count = useSelector((state) => state.counterReducer.count);

  const  dispatch = useDispatch();


  

  return (
    <div className="cointer">
      <h2 className="count"> {count} </h2>
      <button onClick={() => dispatch(increment(1))} className="plus">
        +
      </button>
      <button onClick={() => dispatch(decrement(1))} className="minus">
        -
      </button>
      <button onClick={() => dispatch(reset(0))}  className="reset">
        reset
      </button>
    </div>
  );
};

export default Counter;
