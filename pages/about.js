import React from 'react';
import Layout from '../components/Layout';
import SingUpRequired from '../components/SingUpRequired';


class About extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Layout>
        <SingUpRequired/>
        <h1>About us</h1>
      </Layout>
    )
  }
}

export default About;