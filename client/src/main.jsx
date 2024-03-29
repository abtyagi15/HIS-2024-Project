import React from "react";

// import Tests from "./components/Tests";
import LargeCard from "./components/LargeCard";
// import Address from "./components/Address";

function Main(props) {
  return (
    <>
      <LargeCard load={props.load} />
      {/* <Tests load={props.load} /> */}

      {/* <Address /> */}
    </>
  );
}

export default Main;
