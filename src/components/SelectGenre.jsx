import React from 'react';

class SelectGenre extends React.Component {
  render() {
    return (
      <label htmlFor="select-genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="select-genre"
          data-testid="genre-input"
          value
          onChange
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}
export default SelectGenre;
