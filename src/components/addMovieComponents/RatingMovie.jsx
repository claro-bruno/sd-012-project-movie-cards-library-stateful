import React from 'react';
import PropTypes from 'prop-types';

class RatingMovie extends React.Component {
  render() {
    const { rating, onRatChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          id="rating"
          type="number"
          data-testid="rating-input"
          onChange={ onRatChange }
          value={ rating }
        />
      </label>
    );
  }
}

export default RatingMovie;

RatingMovie.propTypes = {
  rating: PropTypes.number,
  onRatChange: PropTypes.func,
}.isRequired;
