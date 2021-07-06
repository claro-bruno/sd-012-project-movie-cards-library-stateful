import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieRating extends Component {
  render() {
    const { rating, onRatingNumberChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ onRatingNumberChange }
          step={ 0.1 }
          max={ 5 }
          min={ 0 }
        />
      </label>
    );
  }
}

export default MovieRating;

MovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRatingNumberChange: PropTypes.func.isRequired,
};
