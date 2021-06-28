import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { genre, handleChange } = this.props;

    return (
      <label htmlFor="Gênero" data-testid="genre-input-label">
        Gênero
        <select
          value={ genre }
          name="genre"
          onChange={ handleChange }
          id="Gênero"
          data-testid="genre-input"
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
  genre: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Genero;
