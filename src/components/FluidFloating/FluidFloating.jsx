import React, {Component} from 'react';
import "./styles.css";

import {
  Container,
  Row,
  Col
} from "reactstrap";

class FluidFloating extends Component {
  render() {
    return (
        <section className="section pb-0">
          <Row className="row-grid align-items-center my-0" md="6">
            <Col className="order-md-1 font-weight-light mb-0 align-middle text-center">
              <h1 className="display-2 text-dark mb-0">
                Please pick a time{" "}
                <span>Available times are shown on green</span>
              </h1>
            </Col>
          </Row>
        </section>
    );
  }
}

FluidFloating.propTypes = {};

export default FluidFloating;
