import React from 'react';

class GenreInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            id="genre-input"
            data-testid="genre-input"
            value={ value }
            onChange={ onChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
    )
  }
}

export default GenreInput;
