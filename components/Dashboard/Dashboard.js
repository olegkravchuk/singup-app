import React from 'react';
import { connect } from "react-redux";
import { Table } from 'react-bootstrap';


class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { auth } = this.props;
    return (
      <div>
        <div>User information</div>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Date of birth</th>
            <th>Gender</th>
            <th>How hear about us</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{auth.email}</td>
            <td>{auth.password}</td>
            <td>{auth.dateOfBirth}</td>
            <td>{auth.gender}</td>
            <td>{auth.howHearAboutUs}</td>
          </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
