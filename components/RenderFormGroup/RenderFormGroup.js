import React from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class RenderFormGroup extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object.isRequired,
    showFeedback: PropTypes.bool,
    isSelect: PropTypes.bool,
    selectOptions:  requiredIf(PropTypes.array, props => props.isSelect)
  };

  static defaultProps = {
    isSelect: false,
    showFeedback: true,
  };

  isError = (field) => {
    if (this.props.showFeedback && field.valid && field.touched) {
      return "success"
    } else if (this.props.showFeedback && !field.valid && field.touched && !field.active) {
      return "error"
    }
    return null
  };

  render() {
    const {
      input,
      label,
      placeholder,
      type,
      meta,
      showFeedback,
      isSelect,
      selectOptions
    } = this.props;

    return (
      <FormGroup validationState={this.isError(meta)}>
        {label && <ControlLabel>{label}</ControlLabel>}
        {isSelect ? <FormControl componentClass="select" {...input}>
                      {selectOptions.map((option, key)=> <option key={key} value={option.value}>{option.title}</option>)}
                    </FormControl> :
          <FormControl type={type} {...input} placeholder={placeholder}/>
        }
        {showFeedback && <FormControl.Feedback/>}
        {meta.touched && !meta.active && meta.error && <HelpBlock>{meta.error}</HelpBlock>}
      </FormGroup>
    );
  }
}

export default RenderFormGroup;
