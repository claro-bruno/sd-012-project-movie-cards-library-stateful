import React from 'react';
import propTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { handleAddMovies, value } = this.props;

    return (
      <label htmlFor="genero" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genero"
          value={ value }
          data-testid="genre-input"
          onChange={ handleAddMovies }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genero.propTypes = {
  value: propTypes.string,
  handleAddMovies: propTypes.func,
};

Genero.defaultProps = {
  value: '',
  handleAddMovies: () => {},
};

export default Genero;
