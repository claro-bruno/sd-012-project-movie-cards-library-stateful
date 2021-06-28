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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default NumberInput;
