import React from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends React.Component {
  render() {
    const { genre, onGenreChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
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

export default AddMovieGenre;

AddMovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};
