import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddRating extends Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  rating: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default AddRating;
