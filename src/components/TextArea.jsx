import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, label, callback, value } = this.props;

    return (
      <div className="form-floating mb-3">
        <label
          className="form-label"
          data-testid={ `${name}-input-label` }
          htmlFor={ `${name}-input` }
        >
          { label }
        </label>
        <textarea
          className="form-control"
          data-testid={ `${name}-input` }
          name={ name }
          onChange={ callback }
          value={ value }
        />
      </div>
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
