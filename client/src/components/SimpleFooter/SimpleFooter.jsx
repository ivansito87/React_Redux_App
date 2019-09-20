import React from "react";

import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
        <>
          <footer className=" footer mb-0 mt-5 bg-gradient-gray-dark">
            <Container className="mb-0">
              <Row className=" row-grid align-items-center mb-0">
                <Col lg="6">
                  <h3 className=" text-white font-weight-bold mb-2">
                    Made with ❤️ Ivan Rendon
                  </h3>
                  <h4 className=" mb-0 text-white-50 font-weight-bold">
                    Let's get in touch on Github.
                  </h4>
                </Col>
                <Col className=" text-lg-center btn-wrapper" lg="6">
                  <Button
                      className="bg-gradient-gray"
                      color="github"
                      id="tooltip626177562"
                      size="lg"
                      target="_blank"
                  >
                    <img
                        alt="..."
                        src={require("../../images/github.svg")}
                    />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip626177562">
                    Follow me on Github
                  </UncontrolledTooltip>
                </Col>
              </Row>
              <hr/>
              <Row className=" align-items-center justify-content-md-between text-dark">
                <Col className="text-white text-center">
                  <div className=" nav-footer ">
                    © Copyright Ivan Rendon
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
        </>
    );
  }
}

export default SimpleFooter;
