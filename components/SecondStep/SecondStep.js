import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';


const birthdayField = (props) => <FormControl type="text" {...props} />;
const selectAboutField = (props) => <FormControl componentClass="select" {...props}>
                                      <option value="">{''}</option>
                                      <option value="In social networks">In social networks</option>
                                      <option value="From friends">From friends</option>
                                      <option value="Other">Other</option>
                                    </FormControl>;


class SecondStep extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      genderValue: "male", // female unspecified
    };
  }

  static propTypes = {
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(actions.change("secondStep.gender", this.state.genderValue))
  }

  isError = (field) => {
    if (field.valid && field.touched) {
      return "success"
    } else if (!field.valid && field.touched && !field.focus) {
      return "error"
    }
    return null
  };

  isNumber = (val) => {
    return !isNaN(Number(val));
  };

  checkAge = (age) => {
    const { formsSecondStep } = this.props;

    if (formsSecondStep.birthdayMonth.valid && formsSecondStep.birthdayDate.valid && formsSecondStep.birthdayYear.valid &&
      formsSecondStep.birthdayMonth.value && formsSecondStep.birthdayDate.value && formsSecondStep.birthdayYear.value) {
      let dobMonth = formsSecondStep.birthdayMonth.value,
        dobDay = formsSecondStep.birthdayDate.value,
        dobYear = formsSecondStep.birthdayYear.value;
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
    this.setState({ genderValue: e });
    this.props.dispatch(actions.change("secondStep.gender", e))
  };

  handleSubmit = (data) => {
    if (!ReactDOM.findDOMNode(this.ageError)) {
      this.props.onNext(data);
    }
  };

  render() {
    const { formsSecondStep } = this.props;
    return (
      <div>
        <div className="form-title">DATE OF BIRTH</div>
        <Form
          model="secondStep"
          onSubmit={this.handleSubmit}
        >
          <div className="birthday-fields">
            <div className="birthday-fields__item">
              <FormGroup validationState={this.isError(formsSecondStep.birthdayDate)}>
                <Control
                  model=".birthdayDate"
                  placeholder="DD"
                  validators={{
                    isRequired: (val) => !!val.length,
                    isNumber: (val) => this.isNumber(val),
                    isRange: (val) =>  this.isNumber(val) && (31 >= val >= 1)
                  }}
                  validateOn="blur"
                  component={birthdayField}
                />
                <FormControl.Feedback />
                <Errors wrapper={(props) => <HelpBlock>{props.children}</HelpBlock>}
                        show={{ touched: true, focus: false }}
                        model=".birthdayDate"
                        messages={{
                          isRequired: "Please provide a date.",
                          isNumber: "Date should be a number.",
                          isRange: "Date should be between 1 and 31.",
                        }}
                />
              </FormGroup>
            </div>
            <div className="birthday-fields__item">
              <FormGroup validationState={this.isError(formsSecondStep.birthdayMonth)}>
                <Control
                  model=".birthdayMonth"
                  placeholder="MM"
                  validators={{
                    isRequired: (val) => !!val.length,
                    isNumber: (val) => this.isNumber(val),
                    isRange: (val) =>  this.isNumber(val) && (12 >= val >= 1)
                  }}
                  validateOn="blur"
                  component={birthdayField}
                />
                <FormControl.Feedback />
                <Errors wrapper={(props) => <HelpBlock>{props.children}</HelpBlock>}
                        show={{ touched: true, focus: false }}
                        model=".birthdayMonth"
                        messages={{
                          isRequired: "Please provide a month.",
                          isNumber: "Month should be a number.",
                          isRange: "Month should be between 1 and 12.",
                        }}
                />
              </FormGroup>
            </div>
            <div className="birthday-fields__item">
              <FormGroup validationState={this.isError(formsSecondStep.birthdayYear)}>
                <Control
                  model=".birthdayYear"
                  placeholder="YYYY"
                  validators={{
                    isRequired: (val) => !!val.length,
                    isNumber: (val) => this.isNumber(val),
                  }}
                  validateOn="blur"
                  component={birthdayField}
                />
                <FormControl.Feedback />
                <Errors wrapper={(props) => <HelpBlock>{props.children}</HelpBlock>}
                        show={{ touched: true, focus: false }}
                        model=".birthdayYear"
                        messages={{
                          isRequired: "Please provide a year.",
                          isNumber: "Year should be a number.",
                        }}
                />
              </FormGroup>
            </div>
            {!this.checkAge(18) && <div ref={(node) => {this.ageError = node}} className="error-age">You must be aged 18 years or older</div>}
          </div>

          <div className="form-gender">
            <div className="form-title">GENDER</div>
            <ToggleButtonGroup
              justified
              name="gender"
              type="radio"
              value={this.state.genderValue}
              onChange={this.handleGenderChange}
            >
              <ToggleButton value="male">MALE</ToggleButton>
              <ToggleButton value="female">FEMALE</ToggleButton>
              <ToggleButton value="unspecified">UNSPECIFIED</ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="form-about">
            <div className="form-title">WHERE DID YOU HEAR ABOUT IS?</div>
            <FormGroup>
              <Control
                model=".howHearAboutUs"
                component={selectAboutField}
              />
              <FormControl.Feedback />
              <Errors wrapper={(props) => <HelpBlock>{props.children}</HelpBlock>}
                      show={{ touched: true, focus: false }}
                      model=".howHearAboutUs"
              />
            </FormGroup>
          </div>
          <button type="submit" className="btn btn-link next-btn" >Next</button>
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

const mapStateToProps = state => ({
  formsSecondStep: state.forms.secondStep,
});

export default connect(mapStateToProps)(SecondStep);
