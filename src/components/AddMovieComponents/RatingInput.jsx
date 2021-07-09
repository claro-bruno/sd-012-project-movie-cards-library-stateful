import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, updateState } = this.props;
    return (
      <label htmlFor="ratingInput" data-testid="rating-input-label">
        Avaliação
        <input
          id="ratingInput"
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ updateState }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number,
  updateState: PropTypes.func,
}.isRequired;

export default RatingInput;
