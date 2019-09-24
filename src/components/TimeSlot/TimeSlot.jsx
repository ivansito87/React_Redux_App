import React from "react";
import DemoNavbar from "../Navbars/DemoNavnar";
import SimpleFooter from "../SimpleFooter/SimpleFooter";
import Wrapper from "../Wrapper/Wrapper";

class TimeSlot extends React.Component {

  render() {
    return (
        <>
          <DemoNavbar/>
          <Wrapper/>
          <SimpleFooter/>
        </>
    );
  }

}

export default TimeSlot;
