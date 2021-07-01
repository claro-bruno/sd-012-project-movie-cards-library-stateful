import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { name, value, onChange } = this.props;

    return (
      <label htmlFor="add-rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="add-rating"
          data-testid="rating-input"
          type="number"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
