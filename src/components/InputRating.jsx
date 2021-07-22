import React from 'react';
import { number, func } from 'prop-types';

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

InputRating.propTypes = {
  updateRating: func.isRequired,
  rating: number.isRequired,
};

export default InputRating;
