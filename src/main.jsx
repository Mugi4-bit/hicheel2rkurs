import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TWHicheel from "./Component/TWHicheel.jsx";
import DASGAL3 from "./Component/DASGAL3.jsx";
import Web1 from "./Component/Web1.jsx";
TWHicheel;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <DASGAL3 /> */}
    {/* <TWHicheel /> */}
    <Web1></Web1>
  </StrictMode>,
);
