import React from 'react';
import PropTypes from 'prop-types';

class MovieGenre extends React.Component {
  render() {
    const { genre, handleChangeFunction } = this.props;
    return (
      <label htmlFor="MovieGenre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          name="genre"
          onChange={ handleChangeFunction }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>

        </select>
      </label>
    );
  }
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChangeFunction: PropTypes.func.isRequired,
};

export default MovieGenre;
