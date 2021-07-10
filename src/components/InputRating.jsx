import React from 'react';

class InputRating extends React.Component {
  render() {
    const { rating, updateRating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor>
        Avaliação
        <input
          type="number"
          onChange={ updateRating }
          data-testid="rating-input"
          value={ rating }
        />
      </label>
    );
  }
}

export default InputRating;
