import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="ratingInput" data-testid="rating-input-label">
        Avaliação
        <input
          id="ratingInput"
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default RatingInput;
