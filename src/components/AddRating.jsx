import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddRating extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating-input"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
}.isRequired;

export default AddRating;
