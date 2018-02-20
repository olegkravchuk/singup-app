import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router'
import StepsProgress from '../StepsProgress';
import CustomModal from '../CustomModal';
import FirstStep from '../FirstStep';
import SecondStep from '../SecondStep';
import ThirdStep from '../ThirdStep';
import { firstStep, secondStep } from '../../actions/auth'


class SingUpFormWizard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      step: 1
    };
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  previousStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  onFirstStep = (data) => {
    this.props.dispatch(firstStep(data));
    this.nextStep();
  };

  onSecondStep = (data) => {
    this.props.dispatch(secondStep(data));
    this.nextStep();
  };

  onDashboardBtnClick = () => {
    Router.replace('/')
  };

  render() {
    return (
      <div>
        <CustomModal className="modal">

          <div className="modal__title">{this.state.step <= 2 ? "Singup" : "Thank you!"}</div>

          <div>
            <StepsProgress currentStep={this.state.step} steps={3}/>
          </div>

          {this.state.step === 1 && <div className="form"><FirstStep onNext={this.onFirstStep}/></div>}
          {this.state.step === 2 && <div className="form"><SecondStep onBack={this.previousStep} onNext={this.onSecondStep}/></div>}
          {this.state.step === 3 && <div className="form without-border"><ThirdStep onDashboardBtnClick={this.onDashboardBtnClick}/></div>}

        </CustomModal>

        <style global jsx>{`
          .modal-dialog {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) !important;
          }
          .modal .modal__title {
            display: block;
            color: #66a9e2;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 20px;
            font-size: 18px;
          }
          .form {
            margin: 60px 10px;
            padding-bottom: 60px;
            border-bottom: 1px solid #808080;
          }
          .without-border {
            border: none;
          }
          .next-btn {
            position: absolute;
            right: 10px;
            bottom: 10px;
            text-decoration: none;
            font-size: 15px;
            display: inline-block;
            vertical-align: middle;
            color: #66a9e2;
          }
          .next-btn:after {
            content: '\u2192';
            display: inline-block;
            vertical-align: middle;
            padding-bottom: 5px;
            margin-left: 5px;
          }
          .back-btn {
            position: absolute;
            left: 10px;
            bottom: 10px;
            text-decoration: none;
            font-size: 15px;
            display: inline-block;
            vertical-align: middle;
            color: #808080;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(SingUpFormWizard);
