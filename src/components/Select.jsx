import React from 'react';

class Select extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <fieldset>
          <label data-testid="select-input-label">
          Filtrar por gênero
            <select value={ selectedGenre } onChange={ onSelectedGenreChange }>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
      </fieldset>
    );
  }
}

export default Select;
