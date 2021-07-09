import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { handleChange, rating = 0 } = this.props;
    return (
      <label htmlFor="importRating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          id="rating"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
