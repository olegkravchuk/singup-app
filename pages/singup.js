import React from 'react';
import Layout from '../components/Layout';
import SingUpFormWizard from '../components/SingUpFormWizard';

class SingUp extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Layout>
        <SingUpFormWizard/>
      </Layout>
    )
  }
}

export default SingUp;
