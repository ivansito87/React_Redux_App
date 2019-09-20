import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import "./styles.css";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class FluidFloating extends Component {
  constructor(props) {
    super(props);
    // State with constructor
    this.state = {
      name: "Ivan"
    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
        <Container>
                <Row className="row-grid align-items-center mt-3" md="6">
                 {/* <Col className="order-md-2" md="6">
                    <img
                        alt="..."
                        className="img-fluid floating"
                        src={require("../../assets/img/theme/codeDuel.png")}
                    />
                  </Col>*/}
                  <Col className="order-md-1 font-weight-light mt-5 align-middle text-center">
                      <h1 className="display-2 text-dark">
                        Please pick a time{" "}
                        <span>Available times are shown on green</span>
                      </h1>
                      {/*<p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>*/}
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
