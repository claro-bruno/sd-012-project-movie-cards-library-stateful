import React from 'react';

class MovieRating extends React.Component {
  render() {
    const { rating, handleChangeFunction } = this.props;
    return (
      <label htmlFor="MovieRating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChangeFunction }

        />
      </label>
    );
  }
}

export default MovieRating;
