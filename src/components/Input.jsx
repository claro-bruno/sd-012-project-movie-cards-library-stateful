import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
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
      <label htmlFor={ inputId } data-testid={ inputLabelTestId }>
        { inputLabel}
        <input
          id={ inputId }
          data-testid={ inputTestId }
          type={ inputType }
          name={ inputName }
          checked={ inputChecked }
          value={ inputValue }
          onChange={ onChangeInput }
          required={ inputIsRequired }
          maxLength={ inputMaxlength }
        />
      </label>
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
  inputChecked: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputIsRequired: PropTypes.bool,
  inputMaxlength: PropTypes.number,
};

Input.defaultProps = {
  inputType: 'text',
  inputTestId: '',
  inputLabelTestId: '',
  inputIsRequired: true,
  inputMaxlength: 250,
};

export default Input;
