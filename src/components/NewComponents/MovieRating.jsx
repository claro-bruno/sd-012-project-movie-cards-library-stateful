import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { rating, handleChangeFunction } = this.props;
    return (
      <label htmlFor="MovieRating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChangeFunction }

        />
      </label>
    );
  }
}
MovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChangeFunction: PropTypes.func.isRequired,
};

export default MovieRating;
