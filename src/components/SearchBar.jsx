import React from 'react';
import movies from '../data';
import InputTag from './Inputs/InputTag';
import MovieCard from './MovieCard';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
    this.setState({ selectedGenre: e.target.value });
  }

  render() {
    const { inputValue, searchText, // uma string//
      // onSearchTextChange, // uma callback//
      // bookmarkedOnly, // um boolean//
      // onBookmarkedChange, // uma callback//
      selectedGenre, // uma string//
      onSelectedGenreChange, // uma callback//
    } = this.state;
    return (
      <section>
        <form data-testid="search-bar-form" action="">
          <InputTag
            textDoInput="Inclui o texto:"
            dataLabelId="text-input-label"
            dataInputId="text-input"
            searchText={ searchText }
            onSearchTextChange={ this.handleChange }
          />
          <InputTag
            textDoInput="Mostrar somente favoritos"
            dataLabelId="checkbox-input-label"
            searchText="checkbox"
          />
          <label htmlFor="select-input-label" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="comedy" data-testid="select-option">Ação</option>
              <option value="thriller" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
          {
            movies.filter((movieF) => movieF.title.includes(inputValue)
            || movieF.genre.includes(inputValue) || movieF.subtitle.includes(inputValue)
            || movieF.storyline.includes(inputValue)
            || movieF.genre.includes(selectedGenre))
              .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          }
        </form>
      </section>
    );
  }
}

export default SearchBar;
