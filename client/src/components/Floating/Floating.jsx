import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";

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
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import ListGroupItem from "reactstrap/es/ListGroupItem";
import CardHeader from "reactstrap/es/CardHeader";
import ListGroup from "reactstrap/es/ListGroup";

// import Table from "reactstrap";

class Floating extends Component {
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
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col>
                  <Card className="card-lift--hover shadow border-0">
                    <CardHeader className="bg-gradient-info display-3 text-white">Hello World</CardHeader>
                    <Table borderless hover>
                      <thead>
                      <tr>
                        <th>Time</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr className="bg-gradient-danger">
                        <th scope="row">9:00 am</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>770-688-7959</td>
                        <td>Closed</td>
                      </tr>
                      <tr className="bg-gradient-success">
                        <th scope="row">10:00 am</th>
                        <td>{""}</td>
                        <td>{""}</td>
                        <td>{""}</td>
                        <td>Open</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    );
  }
}

Floating.propTypes = {};

export default Floating;
