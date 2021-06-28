import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { name, label, callback, value } = this.props;

    return (
      <div className="mb-3">
        <label
          lassName="form-label"
          data-testid={ `${name}-input-label` }
          htmlFor={ `${name}-input` }
        >
          { label }
        </label>
        <select
          className="form-select form-control"
          data-testid={ `${name}-input` }
          name={ name }
          onChange={ callback }
          value={ value }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
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
