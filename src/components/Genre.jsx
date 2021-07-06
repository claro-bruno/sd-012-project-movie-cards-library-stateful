import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label htmlFor="genreSelect" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          onChange={ onChange }
          name="genre"
          value={ genre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Genre;
