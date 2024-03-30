import React from "react";

import Tests from "./components/Product";
import LargeCard from "./components/LargeCard";
import Donate from "./components/Donate";
// import Address from "./components/Address";

function Main(props) {
  return (
    <>
      <LargeCard load={props.load} />
      <Tests load={props.load} />
      <Donate/>

      {/* <Address /> */}
    </>
  );
}

export default Main;
