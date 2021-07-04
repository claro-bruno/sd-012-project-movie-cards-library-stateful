import React from 'react';

class InputRating extends React.Component {
  render() {
    return (
      <label htmlFor="input-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="input-rating"
          data-testid="rating-input"
          value
          onChange
        />
      </label>
    );
  }
}
export default InputRating;
