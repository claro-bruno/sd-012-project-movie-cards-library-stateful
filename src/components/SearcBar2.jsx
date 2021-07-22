import React, { Component } from 'react';
import PropType from 'prop-types';

class SearchBar2 extends Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <label htmlFor="seleciona" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="seleciona"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          name="selectedGenre"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SearchBar2.propTypes = {
  selectedGenre: PropType.string.isRequired,
  onSelectedGenreChange: PropType.func.isRequired,
};

export default SearchBar2;
