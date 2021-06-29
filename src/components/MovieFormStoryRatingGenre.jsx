import React from 'react';
import PropTypes from 'prop-types';

class MovieFormStoryRatingGenre extends React.Component {
  render() {
    const { storyline, rating, genre, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="sinopse_" data-testid="storyline-input-label">
          Sinopse
          <input
            name="storyline"
            id="sinopse_"
            type="textarea"
            value={ storyline }
            onChange={ handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="avaliacao_" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            id="avaliacao_"
            type="number"
            value={ rating }
            onChange={ handleChange }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="select-genre-add" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="select-genre-add"
            value={ genre }
            onChange={ handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

MovieFormStoryRatingGenre.propTypes = {
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MovieFormStoryRatingGenre;
