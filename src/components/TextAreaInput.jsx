import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextAreaInput extends Component {
  render() {
    const { id, label, name, value, handleChange } = this.props;
    return (
      <label htmlFor={ `${id}-input` } data-testid={ `${id}-input-label` }>
        { label }
        <textarea
          type="text"
          data-testid={ `${id}-input` }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextAreaInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextAreaInput;
