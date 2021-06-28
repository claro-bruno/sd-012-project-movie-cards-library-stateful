import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textInput" data-testid="text-input-label">
          Inclui o texto
          <input type="text" name="" id="textInput" />
        </label>
        <label htmlFor="checkbox">
          <input type="checkbox" name="" id="checkbox" />
        </label>
        <label htmlFor="select">
          <select name="" id="select">
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
