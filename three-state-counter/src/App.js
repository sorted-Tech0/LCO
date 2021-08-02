import React, {useState} from "react";
import "./App.css";

const App = () => {

  const [count, setCount] = useState(0);

  return(
    <div className="App">
      <header>
        <h1>Counter app using state/hooks</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => count <= 0 ? 0 : setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => count >= 1000 ? "": setCount(count + 1)}>Increase</button>
      <p>Value will not go less than zero</p>
    </div>
  )
}

export default App;