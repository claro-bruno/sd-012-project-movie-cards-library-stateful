import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, id, label, dataTestIdInput, dataTestIdLabel, value } = this.props;
    return (
      <label htmlFor={ id } data-testid={ dataTestIdLabel }>
        {label}
        <input id={ id } type={ type } data-testid={ dataTestIdInput } value={ value } />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dataTestIdInput: PropTypes.string.isRequired,
  dataTestIdLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
