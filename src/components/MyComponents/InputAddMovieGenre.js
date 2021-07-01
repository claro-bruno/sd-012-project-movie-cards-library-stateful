import React from 'react';
import PropTypes from 'prop-types';

class InputAddMovieGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input-label"
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ handleChange }
        >
          <option value="" data-testid="genre-option">Todos</option>
          <option value="action" data-test="genre-option">Ação</option>
          <option value="comedy" data-test="genre-option">Comédia</option>
          <option value="thriller" data-test="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputAddMovieGenre.propTypes = {
  handleChange: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default InputAddMovieGenre;
