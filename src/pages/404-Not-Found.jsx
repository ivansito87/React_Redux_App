import React from "react";
// import {Col, Row, Container} from "../components/Grid";
import {Jumbotron, Col, Row, Container, Card, Button} from "reactstrap";
import {Link} from "react-router-dom";

function NotFound() {
  return (
      <section className="section section-lg pt-0 mt-5">
        <Container>
          <Card className="bg-gradient-warning shadow-lg border-0">
            <div className="p-5">
              <Row className="align-items-center">
                <Col>
                  <h1 className="text-center display-1 font-weight-bold"><span
                      className="text-warning display-2 font-weight-bold">404 Page Not Found</span></h1>
                  <h1 className="text-center display-1">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
                  </h1>
                  <p className="lead text-white text-center mt-3">
                    Well that's awkward. Looks like you are completely lost!
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="ml-lg-auto">
                  <Link
                      className="btn btn-white"
                      color="default"
                      to="/"
                      size="lg"
                  >
                   &laquo; Go Back Home
                  </Link>
                </Col>
              </Row>
            </div>
          </Card>
        </Container>
      </section>);
}

export default NotFound;