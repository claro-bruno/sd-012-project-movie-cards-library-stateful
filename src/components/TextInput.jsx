import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { name, value, onChange, text } = this.props;
    return (
      <label htmlFor={ name } data-testid="text-input-label">
        { text }
        <input
          type="text"
          data-testid="text-input"
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextInput;
