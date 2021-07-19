import React from 'react';
import PropTypes from 'prop-types';

class RatingNewMovie extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingNewMovie.propTypes = {
  rating: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingNewMovie;
