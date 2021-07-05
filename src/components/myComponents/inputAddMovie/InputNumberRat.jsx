import React from 'react';
import PropTypes from 'prop-types';

class InputNumberRat extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="input-num-rat" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          onChange={ onChange }
          id="input-num-rat"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

InputNumberRat.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumberRat;
