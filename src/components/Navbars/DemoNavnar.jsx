import React from "react";
import Headroom from "headroom.js";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../../actions/actions"
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import LogoutModal from "../AppointmentModal/LogOutModal";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }

  _closeEditModal = () => {
    this.props.action.toggleLogoutDialog();
  };

  _openEditModal = (appointmentItem) => {

  };

  _handleLogout = () => {
    this.props.action.toggleLogoutDialog();
    /*alert(`Just Kidding!
    No Back-End in this project.`);*/
  };

  render() {
    return (
        <>
          <header className="header-global">
            <Navbar
                className="navbar-main navbar-transparent navbar-light headroom"
                expand="lg"
                id="navbar-main"
            >
              <Container>
                <a href="https://ivanrendon.dev" className="icon-linkedin">
                  <NavbarBrand className="mr-lg-5">
                    <img
                        alt="..."
                        src={require("../../assets/img/brand/ivan-react.png")}
                    />
                  </NavbarBrand>
                </a>
                <UncontrolledCollapse navbar toggler="#navbar_global">
                  <div className="navbar-collapse-header">
                    <Row>
                      <Col className="collapse-brand" xs="6">
                        <a href="http://google.com">
                          <img
                              alt="..."
                              src={require("../../assets/img/brand/argon-react.png")}
                          />
                        </a>
                      </Col>
                      <Col className="collapse-close" xs="6">
                        <button className="navbar-toggler" id="navbar_global">
                          <span/>
                          <span/>
                        </button>
                      </Col>
                    </Row>
                  </div>
                  <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        <i className="ni ni-ui-04 d-lg-none mr-1"/>
                        <span className="nav-link-inner--text">OTHER PROJECTS</span>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-xl">
                        <div className="dropdown-menu-inner">
                          <Media
                              className="d-flex align-items-center"
                              href="https://ivanrendon.dev"
                              target="_blank"
                          >
                            <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                              <i className="fas fa-briefcase"/>
                            </div>
                            <Media body className="ml-3">
                              <h6 className="heading text-primary mb-md-1">
                                Portfolio
                              </h6>
                            </Media>
                          </Media>
                          <Media
                              className="d-flex align-items-center"
                              href="https://code-duel.herokuapp.com"
                              target="_blank"
                          >
                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                              <i className="fas fa-code"/>
                            </div>
                            <Media body className="ml-3">
                              <h6 className="heading text-success mb-md-1">
                                CodeDuel
                              </h6>
                            </Media>
                          </Media>
                          <Media
                              className="d-flex align-items-center"
                              href="https://tranquil-spire-91940.herokuapp.com"
                              target="_blank"
                          >
                            <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                              <i className="fab fa-github"/>
                            </div>
                            <Media body className="ml-3">
                              <h5 className="heading text-warning mb-md-1">
                                GitHub User Serch
                              </h5>
                            </Media>
                          </Media>
                          <Media
                              className="d-flex align-items-center"
                              href="https://warner-media-movie-search.herokuapp.com"
                              target="_blank"
                          >
                            <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                              <i className="fas fa-video"/>
                            </div>
                            <Media body className="ml-3">
                              <h5 className="heading text-danger mb-md-1">
                                Warner Media Movie Search
                              </h5>
                            </Media>
                          </Media>
                        </div>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                  <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <NavItem className="d-none d-lg-block ml-lg-4">
                      <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href=""
                          onClick={this._handleLogout}
                          target="_blank"
                      >
                      <span className="nav-link-inner--text ml-1">
                        Log out
                      </span>
                      </Button>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
          </header>
          <LogoutModal
              open={this.props.open_logout}
              handleClose={this._closeEditModal}
          />
        </>
    );
  }
}

const mapStateToProps = (state) => ({
  appointmentData: state.appointmentData,
  open: state.open,
  open_logout: state.open_logout,
  selectedAppointment: state.selectedAppointment
});

const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoNavbar);
