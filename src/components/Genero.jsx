import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { handleChange, genre } = this.props;
    return (
      <label htmlFor="Genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="Genero"
          name="genre"
          value={ genre }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>

    );
  }
}

Genero.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Genero;
