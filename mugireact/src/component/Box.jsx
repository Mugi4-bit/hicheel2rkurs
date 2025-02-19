import React from 'react'
import { dataBox } from '../data/dataBox';
dataBox

function Box({text,channel,desc}) {
  return (
    <>
      <div>
        <h1>{text}</h1>
        <h2>{channel}</h2>
        <h3>{desc}</h3>
        <img src="avengers" alt="" />
      </div>
    </>
  );
}

export default Box;