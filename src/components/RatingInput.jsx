import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { valueRatingInput, handleChangeRating } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ valueRatingInput }
          data-testid="rating-input"
          onChange={ handleChangeRating }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  valueRatingInput: PropTypes.number.isRequired,
  handleChangeRating: PropTypes.func.isRequired,
};

export default RatingInput;
