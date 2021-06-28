import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { props } = this;
    const {
      labelDataTestId,
      inputLabel,
      inputDataTestId,
      inputName,
      inputType,
      inputValue,
      inputOnChange,
      inputChecked,
    } = props;
    return (
      <label htmlFor={ inputName } data-testid={ labelDataTestId }>
        { inputLabel }
        <input
          data-testid={ inputDataTestId }
          name={ inputName }
          type={ inputType }
          value={ inputValue }
          onChange={ inputOnChange }
          checked={ inputChecked }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  inputValue: '',
  inputChecked: false,
};

Input.propTypes = {
  labelDataTestId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputDataTestId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]), 
  inputOnChange: PropTypes.func.isRequired,
  inputChecked: PropTypes.bool,
};

export default Input;
