import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
        <form
          action=""
          data-testid="search-bar-form"
        > 
          <label 
            id="Inclui o texto"
            data-testid="text-input-label">
            <input
              id="Inclui o texto"
              type="text"
              value={this.props.searchText}
              onChange={this.props.onSearchTextChange}
              data-testid="text-input"
            />Inclui o texto
          </label>
          <label
          data-testid="checkbox-input-label"
          >Mostrar somente favoritos
            <input
              checked={this.props.bookmarkedOnly}
              data-testid="checkbox-input"
              onChange={this.props.onBookmarkedChange}
              name=""
              type="checkbox"
            />
          </label>
          <label data-testid="select-input-label">Filtrar por gênero
            <select 
              data-testid="select-input"
              value={this.props.selectedGenre}
              onChange={this.props.onSelectedGenreChange}
              id=""
              name="">
                <option data-testid="select-option" value="">Todos</option>
                <option data-testid="select-option" value="action">Ação</option>
                <option data-testid="select-option" value="comedy">Comédia</option>
                <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
    )
  }
}

export default SearchBar;