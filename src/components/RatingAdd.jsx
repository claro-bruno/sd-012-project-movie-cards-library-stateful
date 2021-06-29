import React from 'react';
import propTypes from 'prop-types';

class RatingAdd extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="Rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingAdd.propTypes = {
  handleChange: propTypes.func,
  value: propTypes.number,
};

RatingAdd.defaultProps = {
  handleChange: () => {},
  value: 0,
};

export default RatingAdd;
