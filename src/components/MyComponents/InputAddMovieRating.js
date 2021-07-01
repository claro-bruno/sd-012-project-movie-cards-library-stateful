import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovieRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input-label"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputAddMovieRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default InputAddMovieRating;
