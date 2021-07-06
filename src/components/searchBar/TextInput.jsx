import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor="text-input"
        >
          Inclui o texto:
          <input
            type="text"
            value={ value }
            onChange={ onChange }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

export default TextInput;

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
