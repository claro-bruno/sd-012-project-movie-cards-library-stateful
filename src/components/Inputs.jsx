import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const {
      label,
      labelTestId,
      inputName,
      inputType,
      inputTestId,
      inputValue,
      inputIsChecked,
      inputOnChange,
    } = this.props;

    return (
      <div>
        <label
          data-testid={ labelTestId }
          htmlFor={ inputName }
        >
          {label}
          <input
            name={ inputName }
            type={ inputType }
            data-testid={ inputTestId }
            value={ inputValue }
            onChange={ inputOnChange }
            checked={ inputIsChecked }
          />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  label: PropTypes.string.isRequired,
  labelTestId: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputTestId: PropTypes.string,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  inputIsChecked: PropTypes.bool,
  inputOnChange: PropTypes.func.isRequired,
};

Inputs.defaultProps = {
  labelTestId: '',
  inputType: 'text',
  inputTestId: '',
  inputIsChecked: false,
};

export default Inputs;
