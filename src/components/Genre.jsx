import React from 'react';

class Genre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre-input"
      >
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChange }
          name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}
export default Genre;
