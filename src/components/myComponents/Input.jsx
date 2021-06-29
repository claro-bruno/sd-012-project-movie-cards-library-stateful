import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      id,
      dataTestIdLabel,
      type,
      labelText,
      name,
      value,
      handleChange,
      dataTestIdImput,
    } = this.props;

    return (
      <label htmlFor={ name } data-testid={ dataTestIdLabel }>
        { labelText }
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ dataTestIdImput }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  dataTestIdLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dataTestIdImput: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

};

export default Input;
