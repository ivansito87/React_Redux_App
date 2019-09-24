import React from 'react';
import {
  Button,
  Modal,
} from "reactstrap";

export default class LogoutModal extends React.Component {

  render() {

    const {open, handleClose} = this.props;

    return (
        <>
          <Modal
              className="modal-dialog-centered modal-danger"
              contentClassName="bg-gradient-warning"
              isOpen={open}
              toggle={handleClose}
          >
            <div className="modal-header">
              <h6 className="modal-title" id="modal-title-notification">
                Your attention is required
              </h6>
              <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={handleClose}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="py-3 text-center">
                <h1 className="text-warning"><i className="fas fa-exclamation-triangle fa-xlg"/></h1>
                <h3 className="mt-4">Just Kidding!</h3>
                <h4 className="heading">
                  Ideally we would implement this in the back-end to log
                  the user out of the application but for this project
                  is for demonstration purposes only
                </h4>
              </div>
            </div>
            <div className="modal-footer">
              <Button className="btn-white" color="default" type="button" onClick={handleClose}>
                Ok, Got it
              </Button>
            </div>
          </Modal>
        </>
    );
  }
}


