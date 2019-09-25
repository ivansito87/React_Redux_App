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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AppointmentModal extends React.Component {


  render() {

    const {selectedAppointment, open, handleClose, handleChange, handleSave, handleDelete} = this.props;

    return (
        <>
          <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={open}
              toggle={handleClose}
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
                        onClick={handleClose}
                    >
                      <span aria-hidden={true}>×</span>
                    </button>
                    <h3 className="text-white mt-0 pt-0">Please enter your information for the</h3>
                    <h3 className="text-white">{selectedAppointment.time || ""}</h3>
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
                        <Input label="Name" id="name" value={selectedAppointment.name}
                               onChange={handleChange}
                               placeholder={selectedAppointment.name || "First Name"} type="text"/>
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
                        <Input id="last_name" value={selectedAppointment.last_name}
                               onChange={handleChange}
                               placeholder={selectedAppointment.last_name || "Last Name"} type="text"/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input label="Phone" id="phone" value={selectedAppointment.phone}
                               placeholder={selectedAppointment.phone || "Phone Number"} type="text"
                               onChange={handleChange}/>
                      </InputGroup>
                    </FormGroup>
                    <div className="btn-wrapper text-center">
                      <Button
                          className="btn-danger btn-icon"
                          color="danger"
                          onClick={handleDelete}
                      >
                        Delete
                      </Button>
                      <Button
                          className="btn-success btn-icon"
                          color="success"
                          onClick={handleSave}
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


