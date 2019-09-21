import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Register from "./components/NewRegister/NewRegister";
import "./App.css";
import "./assets/styles/nucleo/css/nucleo.css";
import "./assets/css/argon-design-system-react.css";
import "./assets/styles/font-awesome/css/font-awesome.css";
import TimeSlot from "./components/TimeSlot/TimeSlot";

export default function APP() {
  return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/time-slot" component={TimeSlot}/>
          </Switch>
        </Router>
      </React.Fragment>
  );
}
