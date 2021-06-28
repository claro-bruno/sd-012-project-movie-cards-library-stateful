import React from 'react';
import PropTypes from 'prop-types';

export default class SetRating extends React.Component {
  render() {
    const { handleChange, rating } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

SetRating.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
