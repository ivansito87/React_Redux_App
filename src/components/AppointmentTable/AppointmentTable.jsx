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
    const {action} = this.props;
    action.toggleDialog();
    action.selectAppointment(appointmentItem);
  };

  _handleDelete = () => {
    const {selectedAppointment} = this.props;
    selectedAppointment.name = '';
    selectedAppointment.phone = '';
    selectedAppointment.last_name = '';
    this._handleSave();
  };

  _closeEditModal = () => {
    this.props.action.toggleDialog();
  };

  _handleChange = (e) => {
    const { selectedAppointment, action } = this.props;
    let newSelectedAppointment = {
      ...selectedAppointment,
      [e.target.id]: e.target.value
    };
    action.updateForm(newSelectedAppointment);
  };

  _handleSave = () => {
    let updatedAppointment;
    const {selectedAppointment, appointmentData, action} = this.props;

    if (selectedAppointment.name !== '' || selectedAppointment.phone !== '') {
      updatedAppointment = {
        ...selectedAppointment,
        available: false
      };
    } else {
      updatedAppointment = {
        ...selectedAppointment,
        available: true
      };
    }

    let newAppointmentDataArray = appointmentData.map(appointment => {
      if (appointment.time === selectedAppointment.time) {
        return updatedAppointment;
      } else {
        return appointment;
      }
    });

    action.updateAppointment(newAppointmentDataArray);
    action.toggleDialog();
  };

  render() {

    const { appointmentData, open, selectedAppointment } = this.props;

    let appointmentsArray = appointmentData.map(appointmentItem => {
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
        <section className="section mt-0">
          <Container className="section mt-0">
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col>
                    <Card className="card-lift--hover shadow border-0 floating">
                      <CardHeader className="bg-gradient-warning display-3 text-white text-center">
                        React-Redux Time Slots
                      </CardHeader>
                      <Table hover>
                        <TableHeader/>
                        {appointmentsArray}
                        <AppointmentModal
                            open={open}
                            handleClose={this._closeEditModal}
                            selectedAppointment={selectedAppointment}
                            handleChange={this._handleChange}
                            handleSave={this._handleSave}
                            handleDelete={this._handleDelete}
                        />
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
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


