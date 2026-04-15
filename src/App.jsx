import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TWHicheel from "./Component/TWHicheel";
import Web1 from "./Component/Web1";
import FitnessPage from "./pages/FitnessPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Web1></Web1>
      </div>
    </>
  );
}

export default App;
