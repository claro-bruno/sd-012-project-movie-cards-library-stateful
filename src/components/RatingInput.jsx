import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { handleNumber, valueNumber } = this.props;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          onChange={ handleNumber }
          name="rating"
          value={ valueNumber }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  valueNumber: PropTypes.number.isRequired,
  handleNumber: PropTypes.func.isRequired,
};

export default RatingInput;
