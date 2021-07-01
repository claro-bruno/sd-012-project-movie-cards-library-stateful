import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends Component {
  render() {
    const { rating, onChangeRating } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ onChangeRating }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  rating: PropTypes.number,
  onChangeRating: PropTypes.number,
}.isRequired;

export default AddMovieRating;
