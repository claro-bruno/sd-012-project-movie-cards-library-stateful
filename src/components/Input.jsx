import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      labelText,
      dataTestIdLabel,
      type,
      name,
      id,
      dataTestIdInput,
      value,
      checked,
      handleChange,
    } = this.props;

    return (
      <label htmlFor={ id } data-testid={ dataTestIdLabel }>
        { labelText }
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ dataTestIdInput }
          value={ value }
          onChange={ handleChange }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  value: '',
  checked: false,
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  dataTestIdLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestIdInput: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
