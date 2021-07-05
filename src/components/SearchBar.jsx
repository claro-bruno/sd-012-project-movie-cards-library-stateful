import React from 'react';
import movies from '../data';
import InputTag from './OutrosComponentes/InputTag';
import MovieCard from './MovieCard';
import SelectTag from './OutrosComponentes/SelectTag';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedGenre: '',
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
    console.log(e.target.value);
  }

  onSelectedGenreChange(e) {
    this.setState({ selectedGenre: e.target.value });
    console.log(e.target.value);
  }

  render() {
    const { searchText,
      // onSearchTextChange,
      // bookmarkedOnly,
      // onBookmarkedChange,
      selectedGenre,
      // onSelectedGenreChange,
    } = this.state;
    return (
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
        <SelectTag
          selectLabelText="Filtrar por gênero"
          selectedGenre={ selectedGenre }
          value={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        {
          movies.filter((movieF) => movieF.title.includes(searchText)
            || movieF.subtitle.includes(searchText)
            || movieF.storyline.includes(searchText)
            || movieF.genre.includes(selectedGenre))
            .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </form>
    );
  }
}

export default SearchBar;
