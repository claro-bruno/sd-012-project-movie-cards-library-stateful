import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, id, label, callback, value } = this.props;

    return (
      <label data-testid={ `${id}-input-label` } htmlFor={ `${id}-input` }>
        { label }
        <input
          data-testid={ `${id}-input` }
          type={ type }
          name={ name }
          onChange={ callback }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Input;
