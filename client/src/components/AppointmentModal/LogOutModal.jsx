import React, {Component} from 'react';
import PropTypes from 'prop-types';
// reactstrap components
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
  Row,
  Col
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class LogoutModal extends React.Component {


  render() {



    return (
        <>
          {/*<Button
              block
              color="default"
              type="button"
              onClick={() => this.toggleModal("formModal")}
            >
              Form
            </Button>*/}
            <Modal
              className="modal-dialog-centered"
              size="sm"
              // isOpen={this.state.formModal}
              isOpen={this.props.open}
              toggle={this.props.handleClose}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent pb-5">
                    <div className="text-dark text-center mt-2 mb-3">
                      <h3 className="text-dark">Please enter your information for the</h3>
                      <h3 className="text-dark">{ "" }</h3>
                      <h3 className="text-dark">time slot</h3>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative" autoFocus>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>

                              <i> <FontAwesomeIcon icon="spinner" /> </i>

                            </InputGroupText>
                          </InputGroupAddon>
                          {/*<Input label="Name" id="name" value={this.props.selectedAppointment.name} onChange={this.props.handleChange} placeholder={this.props.selectedAppointment.name || "Name"} type="text" />*/}
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>

                              <i> <FontAwesomeIcon icon="spinner" /> </i>

                            </InputGroupText>
                          </InputGroupAddon>
                          {/*<Input id="last_name" value={this.props.selectedAppointment.last_name} onChange={this.props.handleChange} placeholder={this.props.selectedAppointment.last_name || "Last Name"} type="text" />*/}
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              {/*<i className="ni ni-lock-circle-open" />*/}
                            </InputGroupText>
                          </InputGroupAddon>
                          {/*<Input label="Phone" id="phone" value={this.props.selectedAppointment.phone} placeholder={this.props.selectedAppointment.phone || "Phone"} type="text" onChange={this.props.handleChange} />*/}
                        </InputGroup>
                      </FormGroup>
                      <div className="btn-wrapper text-center">
                      <Button
                        className="btn-danger btn-icon"
                        color="danger"
                        onClick={this.props.handleClose}
                      >
                       Cancel
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


