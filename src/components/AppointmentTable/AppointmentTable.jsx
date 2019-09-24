import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../actions/actions"
import {
  Card,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import CardHeader from "reactstrap/es/CardHeader";
import AppointmentItem from "../AppointmentItem/AppointmentItem";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import TableHeader from "./TableHeader";


class AppointmentTable extends Component {

  _openEditModal = (appointmentItem) => {
    console.log("here");
    this.props.action.toggleDialog();
    this.props.action.selectAppointment(appointmentItem);
  };

  _closeEditModal = () => {
    this.props.action.toggleDialog();
  };

  _handleChange = (e) => {
    let newSelectedAppointment = {
      ...this.props.selectedAppointment,
      [e.target.id]: e.target.value
    };
    this.props.action.updateForm(newSelectedAppointment);
  };

  _handleSave = () => {
    let updatedAppointment;
    // edit the state of the time available to render background conditionally
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

    // this will help us find the selected appointment and replace it in main data
    let newAppointmentDataArray = this.props.appointmentData.map(appointment => {
      if (appointment.time === this.props.selectedAppointment.time) {
        return updatedAppointment;
      } else {
        return appointment;
      }
    });

    this.props.action.updateAppointment(newAppointmentDataArray);
    this.props.action.toggleDialog();
  };

  render() {
    let appointmentsArray = this.props.appointmentData.map(appointmentItem => {
      return (<AppointmentItem
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
        <Container className="section">
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                <Col>
                  <Card className="card-lift--hover shadow border-0 floating">
                    <CardHeader className="bg-gradient-warning display-3 text-white text-center">
                      React-Redux Time Slots
                    </CardHeader>
                    <Table hover>
                      <TableHeader />
                      {appointmentsArray}
                      <AppointmentModal
                          open={this.props.open}
                          handleClose={this._closeEditModal}
                          selectedAppointment={this.props.selectedAppointment}
                          handleChange={this._handleChange}
                          handleSave={this._handleSave}
                      />
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

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentTable);


