import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { inputDataTestId, labelDataTestId, label,
      name, type, value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid={ labelDataTestId }
          htmlFor={ labelDataTestId }
        >
          {label}
          <input
            data-testid={ inputDataTestId }
            name={ name }
            type={ type }
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  inputDataTestId: PropTypes.string,
  labelDataTestId: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.string,
}.isRequired;

export default Input;
