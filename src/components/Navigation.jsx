import React from 'react';
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  Jumbotron,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  PropTypes
} from 'reactstrap';
import {Link} from 'react-router-dom';
import HOSTNAME from '../app-config';
import TitleCase from 'title-case';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      isOpen: false,
      imgUrl: '',
      firstname: ''
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {

    console.log(`location is ${HOSTNAME}`);
    const API_URL = (HOSTNAME == 'localhost'
      ? 'http://' + HOSTNAME + ':6026/me'
      : 'https://' + HOSTNAME + '/me');
    console.log(API_URL);

    fetch(API_URL).then((resp) => resp.json())
      .then(function (data) {
        this.setState({ imgUrl: `https://eapim.w3ibm.mybluemix.net/common/run/bluepages/photo?email=${data.email}&client_id=84e0062e-a331-4e7a-812c-92a6764eb2a8` });
        this.setState({firstname: TitleCase(data.firstname)});
      }.bind(this));

  }

  render() {
    return (
      <div>
        <Jumbotron fluid className="jumbotron-main">
          <Container fluid>
            <Row>
              <Col xs="6">
                <div className="ml-5 mt-3">
                  <h1 className="display-4 text-bold">Your work</h1>
                </div>
              </Col>

              <Col xs="6">
                <div className="float-right">
                  <div className="media">
                    <div className="media-body">
                      <h3 className="mt-5 mr-3">Hi {this.state.firstname}!
                      </h3>
                    </div>
                    <img
                      height="75px"
                      className="d-flex align-self-center mr-3 rounded-circle"
                      src = {this.state.imgUrl} 
                      alt="Profile image"></img>

                  </div>
                </div>

              </Col>
            </Row>

          </Container>
        </Jumbotron>

      </div>
    );
  }
}