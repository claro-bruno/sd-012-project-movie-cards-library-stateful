import React from 'react';
import PropTypes from 'prop-types';

class RatingComponent extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingComponent.propTypes = ({
  rating: PropTypes.number,
}).isRequired;

export default RatingComponent;
