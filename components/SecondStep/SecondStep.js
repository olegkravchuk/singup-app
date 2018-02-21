import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Field, reduxForm, Form, change, formValueSelector } from 'redux-form'
import {initialSecondStepState} from "../../reducers/auth";
import validate from "./validate";
import RenderFormGroup from '../../components/RenderFormGroup'

const selectOptions = [
  {value: "", title: ""},
  {value: "In social networks", title: "In social networks"},
  {value: "From friends", title: "From friends"},
  {value: "Other", title: "Other"}
  ];

class SecondStep extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  };

  checkAge = (age) => {
    const { valid, birthdayDate, birthdayMonth, birthdayYear } = this.props;

    if (valid) {
      let dobMonth = birthdayMonth,
        dobDay = birthdayDate,
        dobYear = birthdayYear;
      let now = new Date();
      let nowDay = now.getDate(),
        nowMonth = now.getMonth() + 1,  //jan=0 so month+1
        nowYear = now.getFullYear();

      let ageYear = nowYear - dobYear;
      let ageMonth = nowMonth - dobMonth;
      let ageDay = nowDay - dobDay;
      if (ageMonth < 0) {
        ageYear--;
        ageMonth = (12 + ageMonth);
      }
      if (nowDay < dobDay) {
        ageMonth--;
        ageDay = 30 + ageDay;
      }
      return age <= ageYear;
    }
    return true
  };

  handleGenderChange = (e) => {
    this.props.dispatch(change('secondStep', 'gender', e));
  };

  handleSubmit = (data) => {
    if (!ReactDOM.findDOMNode(this.ageError)) {
      this.props.onNext(data);
    }
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="form-title">DATE OF BIRTH</div>
        <Form onSubmit={handleSubmit(this.handleSubmit)}>
          <div className="birthday-fields">
            <div className="birthday-fields__item">
              <Field name="birthdayDate" type="text" component={RenderFormGroup} placeholder="DD"/>
            </div>
            <div className="birthday-fields__item">
              <Field name="birthdayMonth" type="text" component={RenderFormGroup} placeholder="MM"/>
            </div>
            <div className="birthday-fields__item">
              <Field name="birthdayYear" type="text" component={RenderFormGroup} placeholder="YYYY"/>
            </div>
            {!this.checkAge(18) && <div ref={(node) => {this.ageError = node}} className="error-age">You must be aged 18 years or older</div>}
          </div>

          <div className="form-gender">
            <div className="form-title">GENDER</div>
            <ToggleButtonGroup
              justified
              name="gender"
              type="radio"
              value={this.props.gender}
              onChange={this.handleGenderChange}
            >
              <ToggleButton value="male">MALE</ToggleButton>
              <ToggleButton value="female">FEMALE</ToggleButton>
              <ToggleButton value="unspecified">UNSPECIFIED</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="form-about">
            <div className="form-title">WHERE DID YOU HEAR ABOUT IS?</div>
            <Field
              name="howHearAboutUs"
              type="text"
              component={RenderFormGroup}
              isSelect={true}
              selectOptions={selectOptions}
              showFeedback={false}
            />
          </div>
          <button type="submit" className="btn btn-link next-btn">Next</button>
        </Form>
        <button className="btn btn-link back-btn" onClick={this.props.onBack}>Back</button>

        <style global jsx>{`
          .form-title {
            text-align: center;
            margin-bottom: 20px;
          }
          .birthday-fields {
            width: 100%;
          }
          .birthday-fields .birthday-fields__item {
            width: 33.333%;
            display: inline-block;
            vertical-align: top;
          }
          .form-gender .btn-default {
            background: #fff;
          }
          .form-gender .btn-default.active {
            background: #66a9e2;
            color: #fff;
          }
          .form-about {
            margin-top: 20px;
          }
          .error-age {
            color: #a94442;
            margin-bottom: 15px;
          }
        `}</style>
      </div>
    );
  }
}

SecondStep = reduxForm({
  form: 'secondStep',
  initialValues: initialSecondStepState,
  destroyOnUnmount: false,
  validate
})(SecondStep);

const selector = formValueSelector('secondStep');
export default connect(
  state => {
    const {
      birthdayDate,
      birthdayMonth,
      birthdayYear,
      gender
    } = selector(state, 'birthdayDate', 'birthdayMonth', 'birthdayYear', 'gender');
    return {
      birthdayDate,
      birthdayMonth,
      birthdayYear,
      gender
    }
  }
)(SecondStep)