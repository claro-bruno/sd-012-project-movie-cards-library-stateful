import React from 'react';
import PropTypes from 'prop-types';

class GenreMovie extends React.Component {
  render() {
    const { genre, onGenreChange } = this.props;
    return (
      <label htmlFor="genreMovie" data-testid="genre-input-label">
        Gênero
        <select
          id="genreMovie"
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ onGenreChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default GenreMovie;

GenreMovie.propTypes = {
  genre: PropTypes.number,
  onGenreChange: PropTypes.func,
}.isRequired;
