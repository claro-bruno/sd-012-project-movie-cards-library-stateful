import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  render() {
    const {
      rating,
      updateState,
    } = this.props;

    return (
      <div>
        <label
          htmlFor="rating"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ updateState }
          />
        </label>
      </div>
    );
  }
}

InputNumber.propTypes = {
  rating: PropTypes.number.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default InputNumber;
