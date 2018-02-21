import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, Form } from 'redux-form'
import validate from './validate'
import RenderFormGroup from '../../components/RenderFormGroup'
import { initialFirstStepState } from '../../reducers/auth'


class FirstStep extends React.Component {

  static propTypes = {
    onNext: PropTypes.func.isRequired,
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.props.onNext)} >

          <Field name="email" type="email" component={RenderFormGroup} label="Email"/>
          <Field name="password" type="password" component={RenderFormGroup} label="Password"/>
          <Field name="passwordConfirm" type="password" component={RenderFormGroup} label="Confirm password"/>

        <button type="submit" className="btn btn-link next-btn">Next</button>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'firstStep',
  initialValues: initialFirstStepState,
  destroyOnUnmount: false,
  validate
})(FirstStep)
