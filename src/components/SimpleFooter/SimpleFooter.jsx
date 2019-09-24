import React from "react";
import "./Footer.css";
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
          <footer className=" footer mb-0 bg-gradient-warning">
            <Container className="mb-0">
              <h5 className=" text-white font-weight-bold mb-1 text-center">
                Made with ❤️ and proudly using &nbsp; <span className="text-info"><i
                  className="fab fa-react"/> React </span> and&nbsp; <span className="text-primary"><i
                  className="fas fa-recycle"/> Redux </span>
              </h5>
              <hr/>
              <h3 className="pull-right text-center m-2">
              </h3>
              <ul className="social-networks chicken spin-icon">
                <li>
                  <a href="https://www.linkedin.com/in/ivan-rendon-368b53174/" className="icon-linkedin">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ivan-rendon-368b53174/" className="icon-twitter">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/ivan.rendon.319" className="icon-facebook">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ivansito87" className="icon-twitch">
                    Twitch
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ivansito87" className="icon-github">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/ivansito87/" className="icon-pinterest">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="https://stackoverflow.com/users/11216672/ivansito87?tab=profile" className="icon-instagram">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://gt.bootcampcontent.com/ivan.rendon" className="icon-vimeo">
                    Vimeo
                  </a>
                </li>
              </ul>
              <Row className=" align-items-center justify-content-md-between text-dark">
                <Col className="text-white text-center">
                  <div className=" nav-footer ">
                    © Copyright Ivan Rendon 2019
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
