import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class AppointmentModal extends React.Component {


  render() {
    let time = this.props.selectedAppointment.time
        ? this.props.selectedAppointment.time
        : '';

    return (
        <>
          <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.props.open}
              toggle={this.props.handleClose}
          >
            <div className="modal-body p-0">
              <Card className="bg-gradient-warning shadow border-0">
                <CardHeader className="bg-transparent pb-5">
                  <div className="text-dark text-center mt-2 mb-3">
                    <button
                        aria-label="Close"
                        className="close text-white"
                        data-dismiss="modal"
                        type="button"
                        onClick={this.props.handleClose}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h3 className="text-white mt-0 pt-0">Please enter your information for the</h3>
                    <h3 className="text-white">{time}</h3>
                    <h3 className="text-white mb-0">time slot</h3>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <Form role="form">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative" autoFocus>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i>
                              <FontAwesomeIcon icon="spinner"/>
                            </i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input label="Name" id="name" value={this.props.selectedAppointment.name}
                               onChange={this.props.handleChange}
                               placeholder={this.props.selectedAppointment.name || "First Name"} type="text"/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i>
                              <FontAwesomeIcon icon="spinner"/>
                            </i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input id="last_name" value={this.props.selectedAppointment.last_name}
                               onChange={this.props.handleChange}
                               placeholder={this.props.selectedAppointment.last_name || "Last Name"} type="text"/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input label="Phone" id="phone" value={this.props.selectedAppointment.phone}
                               placeholder={this.props.selectedAppointment.phone || "Phone Number"} type="text"
                               onChange={this.props.handleChange}/>
                      </InputGroup>
                    </FormGroup>
                    <div className="btn-wrapper text-center">
                      <Button
                          className="btn-danger btn-icon"
                          color="danger"
                          onClick={this.props.handleClose}
                      >
                        Delete
                      </Button>
                      <Button
                          className="btn-success btn-icon"
                          color="success"
                          onClick={this.props.handleSave}
                      >
                        Save
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Modal>
        </>
    );
  }
}


