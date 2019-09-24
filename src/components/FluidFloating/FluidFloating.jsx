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
        <Container>
          <Row className="row-grid align-items-center mt-3" md="6">
            <Col className="order-md-1 font-weight-light mt-5 align-middle text-center">
              <h1 className="display-2 text-dark">
                Please pick a time{" "}
                <span>Available times are shown on green</span>
              </h1>
              <div className="btn-wrapper">
              </div>
            </Col>
          </Row>
        </Container>
    );
  }
}

FluidFloating.propTypes = {};

export default FluidFloating;
