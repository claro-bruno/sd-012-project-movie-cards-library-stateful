import React from 'react';
import movies from '../data';
import InputTag from './Inputs/InputTag';
import MovieCard from './MovieCard';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      // searchText: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
    // this.setState({ selectedGenre: e.target.value });
  }

  onSelectedGenreChange(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  render() {
    const { searchText, onSearchTextChange, // uma callback//
      bookmarkedOnly, // um boolean//
      onBookmarkedChange, // uma callback//
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
            onSearchTextChange={ this.onSearchTextChange }
          />
          <InputTag
            textDoInput="Mostrar somente favoritos"
            dataLabelId="checkbox-input-label"
            searchText="checkbox"
          />
          <label
            htmlFor="select-input-label"
            data-testid="select-input-label"
            // onSearchTextChange={ this.onSelectedGenreChange }
          >
            Filtrar por gênero
            <select
              data-testid="select-input"
              value={ selectedGenre }
              onChange={ this.onSelectedGenreChange }
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
          {
            movies.filter((movieF) => movieF.title.includes(searchText)
            || movieF.genre.includes(searchText) || movieF.subtitle.includes(searchText)
            || movieF.storyline.includes(searchText)
            || movieF.genre.includes(selectedGenre))
              .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          }
        </form>
      </section>
    );
  }
}

export default SearchBar;
