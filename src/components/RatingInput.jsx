import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { rating, method } = this.props;
    return (
      <label htmlFor="add-movie-rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="add-movie-rating"
          type="number"
          value={ rating }
          onChange={ method }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  method: PropTypes.func.isRequired,
};

export default RatingInput;
