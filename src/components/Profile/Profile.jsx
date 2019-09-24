import React, { Component } from 'react';
import { Button, Card, Col, Container, Row, UncontrolledTooltip } from "reactstrap";

class Profile extends Component {

  render() {
    return (
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300 floating">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="https://ivanrendon.dev" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../../assets/img/theme/ivan.JPG")}
                        />
                      </a>
                    </div>
                  </Col>
                  <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                  >
                    <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                          className="mr-4"
                          color="info"
                          href="https://www.linkedin.com/in/ivan-rendon/"
                          onClick={e => e.preventDefault()}
                          size="sm"
                          id="tooltip126536702"
                      >
                        Connect
                      </Button>
                      <UncontrolledTooltip delay={0} target="tooltip126536702">
                        Follow Me
                      </UncontrolledTooltip>
                      <Button
                          className="float-right"
                          color="default"
                          href="https://twitter.com/IvanRen19266618"
                          size="sm"
                          id="tooltip383967593"
                      >
                        Message
                      </Button>
                      <UncontrolledTooltip delay={0} target="tooltip383967593">
                        Tweet Me
                      </UncontrolledTooltip>
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="4">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading">38</span>
                        <span className="description">Repositories</span>
                      </div>
                      <div>
                        <span className="heading">24</span>
                        <span className="description">Apps</span>
                      </div>
                      <div>
                        <span className="heading">611</span>
                        <span className="description">Contributions</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <h3 className="display-2 text-dark">
                    <span className="font-weight-light">Hi, my name is <br/></span>
                    Ivan Rendon{" "}
                  </h3>
                  <div className="h6 font-weight-300">
                    <i className="ni location_pin mr-2"/>
                    Smyrna, Georgia
                  </div>
                  <div className="h6 mt-4">
                    <i className="ni business_briefcase-24 mr-2"/>
                    Front End Developer - Backend Developer - Full-Stack-Developer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2"/>
                    Welcome to my Time Slot Scheduler
                  </div>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <p>
                        Full-Stack Web Developer specialized in object-oriented programming with
                        experience in web design and development. Passionate about
                        approaching programming challenges from different angles. Highly adaptable, flexible
                        professional who embraces teamwork, collaborating with others or independently to
                        create meaningful web applications
                      </p>
                      <a href="https://ivanrendon.dev" target="_blank" rel="noopener noreferrer">
                        Show more
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
          </Container>
        </section>
    );
  }
}


export default Profile;
