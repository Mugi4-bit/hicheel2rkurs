import React, { useState, useSyncExternalStore } from "react";
import { dataBox } from "../data/dataBox";
dataBox

const State = () => {
  const [count, setCount] = useState(0);

  return (
    // <div>
    //   <p>Counter App: {count}</p>
    //   <button style={{backgroundColor:"green"}} onClick={() => setCount(count + 1)}>increment</button>
    //   <button style={{backgroundColor:"red"}}onClick={() => setCount(count - 1)}>decrement</button>
    //   <button style={{backgroundColor:"gray"}}onClick={() => setCount(count-count)}>reset</button>
    // </div>
    <div>
      
      <p>Taalagdsan:{count}</p>
      <button style={{backgroundColor:"green"}} onClick={() => setCount(count + 1)}>taalagdsan</button>
     <button style={{backgroundColor:"red"}}onClick={() => setCount(count - 1)}>taalagdaagui</button>
      <button style={{backgroundColor:"gray"}}onClick={() => setCount(count-count)}>shineer ehleh</button>
    </div>
  );
};



export default State;


