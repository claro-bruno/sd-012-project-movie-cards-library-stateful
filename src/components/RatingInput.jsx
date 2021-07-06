import React from 'react';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            id="rating-input"
            data-testid="rating-input"
            type="number"
            step=".1"
            value={ value }
            onChange={ onChange }
          />
        </label>
    )
  }
}

export default RatingInput;
