import React from 'react';
import { connect } from 'react-redux';
import Router from "next/router";


class SingUpRequired extends React.Component {

  onRedirect = (path) => {
    Router.replace(path)
  };

  componentDidMount() {
    if (!this.props.auth.isRegister) {
      Router.replace('/singup')
    }
  }

  render() {
      return null
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(SingUpRequired);
