import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    this.props.parentThis.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="texto" data-testid="text-input-label">Inclui o texto</label>
          <input onChange={onSearchTextChange} type="text" data-testid="text-input" value={ searchText } id="texto" />
          <label htmlFor="checkbox" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
          <input onChange={onBookmarkedChange} type="Checkbox" data-testid="checkbox-input" checked={ bookmarkedOnly } id="checkbox" />
          <label htmlFor="select" data-testid="select-input-label">Filtrar por gênero"</label>
          <select value={ selectedGenre } onChange={ onSelectedGenreChange } data-testid="select-input" id="select">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
