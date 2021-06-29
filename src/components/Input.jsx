import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Input.css';

class Input extends Component {
  render() {
    const {
      inputId,
      inputTestId,
      inputLabel,
      inputLabelTestId,
      inputType,
      inputName,
      inputChecked,
      inputValue,
      onChangeInput,
      inputIsRequired,
      inputMaxlength,
    } = this.props;

    return (
      <div className={ `input-${inputType}-div` }>
        <label
          htmlFor={ inputId }
          data-testid={ inputLabelTestId }
          className={ `input-${inputType}-label` }
        >
          {inputLabel}
        </label>
        <input
          id={ inputId }
          data-testid={ inputTestId }
          type={ inputType }
          className={ `input-${inputType}` }
          name={ inputName }
          value={ inputValue }
          checked={ inputChecked }
          onChange={ onChangeInput }
          required={ inputIsRequired }
          maxLength={ inputMaxlength }
        />
      </div>
    );
  }
}

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputTestId: PropTypes.string,
  inputLabel: PropTypes.string.isRequired,
  inputLabelTestId: PropTypes.string,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  inputChecked: PropTypes.bool,
  onChangeInput: PropTypes.func.isRequired,
  inputIsRequired: PropTypes.bool,
  inputMaxlength: PropTypes.number,
};

Input.defaultProps = {
  inputType: 'text',
  inputTestId: '',
  inputLabelTestId: '',
  inputChecked: false,
  inputIsRequired: true,
  inputMaxlength: 250,
};

export default Input;
