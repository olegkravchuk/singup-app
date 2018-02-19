import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';


const emailField = (props) => <FormControl type="text" {...props} />;
const passwordField = (props) => <FormControl type="password" {...props} />;

class FirstStep extends React.Component {

  static propTypes = {
    onNext: PropTypes.func.isRequired,
  };

  isError = (field) => {
    if (field.valid && field.touched) {
      return "success"
    } else if (!field.valid && field.touched && !field.focus) {
      return "error"
    }
    return null
  };

  handleSubmit = (data) => {
    this.props.onNext(data);
  };

  render() {
    const { formsFirstStep } = this.props;
    return (
      <Form
        model="firstStep"
        onSubmit={this.handleSubmit}
      >

        <FormGroup validationState={this.isError(formsFirstStep.email)}>
          <ControlLabel>Email</ControlLabel>
          <Control
            model=".email"
            validators={{
             isRequired: (val) => !!val.length,
             isEmail: (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
            }}
            validateOn="blur"
            component={emailField}
          />
          <FormControl.Feedback />
          <Errors wrapper={(props) => <HelpBlock>{props.children}</HelpBlock>}
                  show={{ touched: true, focus: false }}
                  model=".email"
                  messages={{
                    isRequired: "Please provide an email.",
                    isEmail: (val) => "Email is not a valid."
                  }}
          />
        </FormGroup>

        <FormGroup validationState={this.isError(formsFirstStep.password)}>
          <ControlLabel>Password</ControlLabel>
          <Control
            model=".password"
            validators={{
              isRequired: (val) => !!val.length,
              minLength: (val) => val.length > 5
            }}
            validateOn="blur"
            component={passwordField}
          />
          <FormControl.Feedback />
          <Errors wrapper={(props) => <HelpBlock>{props.children}</HelpBlock>}
                  show={{ touched: true, focus: false }}
                  model=".password"
                  messages={{
                    isRequired: "Please provide a password.",
                    minLength: "Password should be minimum 6 characters long",
                    passwordsMatch: "Password doesn`t equal password confirm."
                  }}
          />
        </FormGroup>

        <FormGroup validationState={this.isError(formsFirstStep.passwordConfirm)}>
          <ControlLabel>Confirm password</ControlLabel>
          <Control
            model=".passwordConfirm"
            id=".passwordConfirm"
            validators={{
              isRequired: (val) => !!val.length,
              minLength: (val) => val.length > 5,
              passwordsMatch: (val) => val === formsFirstStep.password.value
            }}
            validateOn="blur"
            component={passwordField}
          />
          <FormControl.Feedback />
          <Errors wrapper={(props) => <HelpBlock>{props.children}</HelpBlock>}
                  show={{ touched: true, focus: false }}
                  model=".passwordConfirm"
                  messages={{
                    isRequired: 'Please provide a password confirm.',
                    minLength: "Password should be minimum 6 characters long.",
                    passwordsMatch: 'Password confirm doesn`t equal password.'
                  }}
          />
        </FormGroup>

        <button type="submit" className="btn btn-link next-btn">Next</button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  formsFirstStep: state.forms.firstStep,
});

export default connect(mapStateToProps)(FirstStep);
