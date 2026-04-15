import React from "react";

import Topbar from "./ComponentGym/Topbar";
import Intro from "./ComponentGym/Intro";
import ProgramList from "./ComponentGym/ProgramList";
import TrainerSection from "./ComponentGym/TrainerSection";
import BottomFooter from "./ComponentGym/BottomFooter";

function Web1() {
  return (
    <>
      <div>
        <Topbar></Topbar>
        <Intro></Intro>
        <ProgramList></ProgramList>
        <TrainerSection></TrainerSection>
        <BottomFooter></BottomFooter>
      </div>
    </>
  );
}

export default Web1;
