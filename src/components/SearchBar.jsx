import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <body>
      <div>
        <form
          action=""
          data-testid="search-bar-form"
        >Inclui o texto: 
          <label 
            id="Inclui o texto"
            data-testid="text-input-label">
            <input
              id="Inclui o texto"
              type="text"
              value="searchText"
              onChange="onSearchTextChange"
              data-testid="text-input"
            />
          </label>
          <label
          data-testid="checkbox-input-label"
          >
            <input
              checked="bookmarkedOnly"
              data-testid="checkbox-input"
              book="bookmarkedOnly"
              onChange="onBookmarkedChange"
              name=""
              type="checkbox"
            />
          </label>
          <label data-testid="select-input-label">Filtrar por gênero
            <select 
              data-testid="select-input"
              value="selectedGenre"
              onChange="onSelectedGenreChange"
              id=""
              name="">
                <option data-testid="select-option" value="">Todos</option>
                <option data-testid="select-option" value="action">Ação</option>
                <option data-testid="select-option" value="comedy">Comédia</option>
                <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    </body>   
    )
  }
}

export default SearchBar;