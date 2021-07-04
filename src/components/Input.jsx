import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, value, name, ctrl, checked, onChange } = this.props;
    return (
      (name === 'searchText' || name === 'bookmarkedOnly'
        || name === 'selectedGenre' || name === 'imagePath') ? (
          <label
            htmlFor={ `${ctrl}-input` }
            data-testid={ `${ctrl}-input-label` }
          >
            { label }
            <input
              type={ type }
              id={ `${ctrl}-input` }
              name={ name }
              value={ value }
              checked={ checked }
              onChange={ onChange }
              data-testid={ `${ctrl}-input` }
            />
          </label>
        ) : (
          <label
            htmlFor={ `${name}-input` }
            data-testid={ `${name}-input-label` }
          >
            { label }
            <input
              type={ type }
              id={ `${name}-input` }
              name={ name }
              value={ value }
              checked={ checked }
              onChange={ onChange }
              data-testid={ `${name}-input` }
            />
          </label>
        )
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string.isRequired,
  ctrl: PropTypes.string,
  checked: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
  ctrl: '',
  checked: '',
};

export default Input;
