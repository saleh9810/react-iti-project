import "./Counter.css";
const Counter = (props) => {

  return (
    <div className="cointer">
      <h2 className="count"> {props.count} </h2>
      <button onClick={props.plusCount} className="plus">
        +
      </button>
      <button onClick={props.minusCount} className="minus">
        -
      </button>
      <button onClick={props.resetCount} className="reset">
        reset
      </button>
    </div>
  );
};

export default Counter;
