import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';


class CustomModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.show}>
        {this.props.children}
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool
};

CustomModal.defaultProps = {
  show: true
};

export default CustomModal;
