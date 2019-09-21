import React from "react";
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
  Container,
  Row,
  Col,
    UncontrolledTooltip
} from "reactstrap";

// core components
import DemoNavbar from "../Navbars/DemoNavnar";
// import CardsFooter from "components/Footers/CardsFooter.jsx";
import SimpleFooter from "../SimpleFooter/SimpleFooter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import Profile from "../Profile/Profile";
import Floating from "../Floating/Floating";
import FluidFloating from "../FluidFloating/FluidFloating";
import Tables from "../Table/Table";

// index page sections
// import Download from "../IndexSections/Download.jsx";

class TimeSlot extends React.Component {
  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
        <>
          <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-3 icon-shape-default bg-gradient-warning">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
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
                      <i className="ni location_pin mr-2" />
                      Smyrna, Georgia
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Front End Developer - Backend Developer - Full-Stack-Developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Georgia Institute of Technology
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
                        <a href="https://ivanrendon.dev" target="_blank" >
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
            <FluidFloating />
          <Floating />
          </section>
        </main>
        <SimpleFooter />
        </>
    );
  }
}

export default TimeSlot;
