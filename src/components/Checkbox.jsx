import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { id, label, callback, checked } = this.props;

    return (
      <div className="form-check mb-3">
        <input
          className="form-check-input"
          data-testid={ `${id}-input` }
          id={ `${id}-input` }
          type="checkbox"
          onChange={ callback }
          checked={ checked }
        />
        <label
          className="form-check-label"
          data-testid={ `${id}-input-label` }
          htmlFor={ `${id}-input` }
        >
          { label }
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
