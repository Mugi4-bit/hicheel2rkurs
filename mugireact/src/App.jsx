dataBox
import { Component } from "react";
import "./App.css";
import Box from "./component/Box";
import State from "./component/State";
import { dataBox } from "./data/dataBox";
<Movie></Movie>

Box

function App() {
  return (
    <>
    <Movie></Movie>
      {dataBox.map((oneChannel)=> (
        <Box>
        text={oneChannel.text}
        </Box>
      
      

    ))}
        <State></State>

        
    </>
  );
}

export default App;
