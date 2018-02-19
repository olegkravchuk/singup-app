import React from 'react';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';
import SingUpRequired from '../components/SingUpRequired';

class Index extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Layout>
        <SingUpRequired/>
        <Dashboard/>
      </Layout>
    )
  }
}

export default Index;
