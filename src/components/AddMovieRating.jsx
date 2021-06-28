import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends Component {
  render() {
    const { handle, rating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ handle }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  handle: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default AddMovieRating;
