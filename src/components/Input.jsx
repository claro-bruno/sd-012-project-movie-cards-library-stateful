import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, name, value,
      handleChange, type, checked } = this.props;
    return (

      <label htmlFor={ `${name}-input-label` } data-testid={ `${name}-input-label` }>
        {label}
        <input
          name={ name }
          value={ value }
          onChange={ handleChange }
          type={ type }
          data-testid={ `${name}-input` }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
}.isRequired;

export default Input;
