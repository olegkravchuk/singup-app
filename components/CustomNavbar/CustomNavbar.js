import React from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import Router from "next/router";


class CustomNavbar extends React.Component {

  onRedirect = (path) => {
    Router.replace(path)
  };

  render() {
    if (this.props.auth.isRegister) {
      return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a onClick={() => this.onRedirect("/")}>SingUp module</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} onClick={() => this.onRedirect("/about")}>About</NavItem>
            <NavItem eventKey={2} onClick={() => this.onRedirect("/contact")}>Contact</NavItem>
          </Nav>
        </Navbar>
      )
    }
    return null
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(CustomNavbar);
