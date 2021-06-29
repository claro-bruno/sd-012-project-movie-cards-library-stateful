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
<<<<<<< HEAD
          max="5"
          step="0.1"
=======
>>>>>>> 2d8fb450947f33786939e4e58f9dc3f7824c7f41
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
<<<<<<< HEAD
  value: PropTypes.number.isRequired,
=======
  value: PropTypes.string.isRequired,
>>>>>>> 2d8fb450947f33786939e4e58f9dc3f7824c7f41
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default NumberInput;
