import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingForm extends Component {
  render() {
    const { ratingValue, ratingOnChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          type="number"
          value={ ratingValue }
          data-testid="rating-input"
          onChange={ ratingOnChange }
          name="rating"
        />
      </label>
    );
  }
}

RatingForm.propTypes = {
  ratingOnChange: PropTypes.string.isRequired,
  ratingValue: PropTypes.number.isRequired,
};

export default RatingForm;
