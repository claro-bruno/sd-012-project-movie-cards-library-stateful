import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingForAddMovie extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="rating"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>

    );
  }
}

RatingForAddMovie.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default RatingForAddMovie;
