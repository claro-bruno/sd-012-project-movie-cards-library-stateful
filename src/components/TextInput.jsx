import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { name, value, onChange, text, testid } = this.props;
    return (
      <div>
        <label htmlFor={ name } data-testid={ `${testid}-input-label` }>
          { text }
        </label>
        <input
          type="text"
          data-testid={ `${testid}-input` }
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default TextInput;
