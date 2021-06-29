import React from 'react';
import PropTypes from 'prop-types';

function Rating({ rating, inputHandler }) {
  return (
    <label data-testid="rating-input-label" htmlFor="rating">
      Avaliação
      <input
        id="rating"
        type="number"
        data-testid="rating-input"
        value={ rating }
        onChange={ (event) => inputHandler(event) }
      />
    </label>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  inputHandler: PropTypes.func.isRequired,
};
export default Rating;
