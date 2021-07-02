import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label,
      name, type, value, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid={ `${name}-input-label` }
          htmlFor={ `${name}-input-label` }
        >
          {label}
          <input
            data-testid={ `${name}-input` }
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
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Input;
