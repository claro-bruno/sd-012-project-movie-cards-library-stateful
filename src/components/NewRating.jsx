import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewRating extends Component {
  render() {
    const { rating, newCard } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          onChange={ newCard }
          value={ rating }
          step="0.1"
          min="0"
          max="5"
        />
      </label>);
  }
}
NewRating.propTypes = {
  rating: PropTypes.number.isRequired,
  newCard: PropTypes.func.isRequired,
};
export default NewRating;
