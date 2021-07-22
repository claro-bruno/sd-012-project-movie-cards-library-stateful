import React from 'react';
import PropTypes from 'prop-types';

class Rating2 extends React.Component {
  render() {
    const { handleChange, rating } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          id="rating"
          name="rating"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Rating2.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rating2;
