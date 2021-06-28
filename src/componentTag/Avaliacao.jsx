import PropTypes from 'prop-types';

import React from 'react';

class Rating extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Avaliação" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          id="Avaliação"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rating;
