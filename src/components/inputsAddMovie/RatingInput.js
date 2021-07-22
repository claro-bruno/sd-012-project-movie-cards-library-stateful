import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="Avaliação">
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={ value }
          onChange={ handleChange }
          min="0"
          max="5"
          step=".1"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
