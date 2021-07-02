import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        { label }
        <input
          data-testid={ `${name}-input` }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
