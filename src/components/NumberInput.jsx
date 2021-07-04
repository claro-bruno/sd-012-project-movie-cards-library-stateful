import React from 'react';
import PropTypes from 'prop-types';

class NumberInput extends React.Component {
  render() {
    const { name, value, onChange, text, testid } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${testid}-input-label` }>
        { text }
        <input
          type="number"
          max="5"
          min="0"
          step="0.1"
          data-testid={ `${testid}-input` }
          name={ name }
          id={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default NumberInput;
