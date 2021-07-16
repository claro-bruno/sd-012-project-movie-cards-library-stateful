import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Number extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          id="rating-input"
          name="rating"
          data-testid="rating-input"
          min="1"
          max="10"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Number;

Number.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
