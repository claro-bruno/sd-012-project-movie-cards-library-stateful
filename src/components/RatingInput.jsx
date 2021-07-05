import React, { Component } from 'react';

class RatingInput extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return(
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

export default RatingInput;
