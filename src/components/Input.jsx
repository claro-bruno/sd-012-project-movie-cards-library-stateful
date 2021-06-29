import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, value, name, onChange } = this.props;
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        { label }
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
