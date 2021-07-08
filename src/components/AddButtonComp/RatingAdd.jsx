import React from 'react';
import PropTypes from 'prop-types';

class RatingAdd extends React.Component {
  render() {
    const { rating, handleChange2 } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange2 }
        />
      </label>
    );
  }
}

RatingAdd.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange2: PropTypes.func.isRequired,
};

export default RatingAdd;
