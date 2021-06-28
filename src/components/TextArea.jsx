import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, label, callback, value } = this.props;

    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}-input` }>
        { label }
        <textarea
          data-testid={ `${name}-input` }
          name={ name }
          onChange={ callback }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Input;
