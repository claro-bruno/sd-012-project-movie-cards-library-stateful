import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const {
      labelText,
      labelId,
      inputId,
      inputType,
      inputName,
      inputValue,
      onChangeInput,
    } = this.props;
    return (
      <label data-testid={ labelId } htmlFor={ inputId }>
        { labelText }
        <input
          data-testid={ inputId }
          type={ inputType }
          name={ inputName }
          value={ inputValue }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  labelId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
};  

export default InputText;
