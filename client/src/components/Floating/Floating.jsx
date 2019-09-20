import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions/actions"
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
import AppointmentItem from "../AppointmentItem/AppointmentItem";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

// import Table from "reactstrap";

class Floating extends Component {

	_openEditModal = (appointmentItem) => {
	  console.log("here");
		this.props.action.toggleDialog();
		this.props.action.selectAppointment(appointmentItem);
	}

	_closeEditModal = () => {
		this.props.action.toggleDialog();
	}

    _handleChange = (e) => {

	  console.log(e.target.value);

		let newSelectedAppointment = {
			...this.props.selectedAppointment,
			[e.target.id]: e.target.value
		};
		this.props.action.updateForm(newSelectedAppointment);
    }

	_handleSave = () => {
		let updatedAppointment;
		// edit state of availability to conditionally render red background
		if (this.props.selectedAppointment.name !== '' || this.props.selectedAppointment.phone !== '') {
			updatedAppointment = {
		    	...this.props.selectedAppointment,
		    	available: false
			};
		} else {
			updatedAppointment = {
		    	...this.props.selectedAppointment,
		    	available: true
			};
		}

		// find selectedApt and replace it in main data src
		let newAppointmentDataArray = this.props.appointmentData.map(appointment => {
			if (appointment.time === this.props.selectedAppointment.time) {
		    	return updatedAppointment;
			} else {
		    	return appointment;
			}
		});

		this.props.action.updateAppointment(newAppointmentDataArray);
		this.props.action.toggleDialog();
	}

	/* let normaLizeInput = (timeSlot) => {
	 let timeSlot = lower.charAt(0).toUpperCase() + lower.substring(1);
  };*/

  render() {
    let appointmentsArray = this.props.appointmentData.map(appointmentItem => {
      return (<AppointmentItem
          // onClick={() => this._openEditModal(appointmentItem)}
          modal={() => this._openEditModal(appointmentItem)}
          key={appointmentItem.time}
          time={appointmentItem.time}
          name={appointmentItem.name}
          phone={appointmentItem.phone}
          last_name={appointmentItem.last_name}
          available={appointmentItem.available}
      />);
    });

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

                      {appointmentsArray}

                      <AppointmentModal
                          open={this.props.open}
                          handleClose={this._closeEditModal}
                          selectedAppointment={this.props.selectedAppointment}
                          handleChange={this._handleChange}
                          handleSave={this._handleSave}
                      />
                      {/*<tbody>
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
                      </tbody>*/}
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

const mapStateToProps = (state) => ({
	appointmentData: state.appointmentData,
	open: state.open,
	selectedAppointment: state.selectedAppointment
});

const mapDispatchToProps = (dispatch) => ({
	action: bindActionCreators(Actions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Floating);


