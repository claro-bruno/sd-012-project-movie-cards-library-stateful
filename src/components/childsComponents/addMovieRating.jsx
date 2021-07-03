import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { handleChange, rating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default AddMovieRating;
