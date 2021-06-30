import React from 'react';

export default class SearchBarSelect extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { selectedGenre, onSelectedGenreChange, } = this.props;
    return (      
      <label
        htmlFor="select"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          id="select"
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
