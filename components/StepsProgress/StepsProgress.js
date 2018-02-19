import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';


class StepsProgress extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const widthSteps = 100 / this.props.steps * this.props.currentStep;
    return (
      <div>
        <ProgressBar now={widthSteps} srOnly />

        <style global jsx>{`
        .progress {
          height: 10px;
          border-radius: 0;
        }
        .progress-bar {
          background-image: none;
          background-color: #66a9e2;
        }
        `}</style>
      </div>
    );
  }
}

StepsProgress.propTypes = {
  steps: PropTypes.number,
  currentStep: PropTypes.number,
};
StepsProgress.defaultProps = {
  steps: 3,
  currentStep: 1,
};

export default StepsProgress;
