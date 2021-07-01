// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovies from './AddMovie';

class MovieLibray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '', // quarda o texto de busca
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...props.movies],
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar searchText={ searchText } bookmarkedOnly={ bookmarkedOnly } selectedGenre={ selectedGenre } />
        <MovieList movies={ this.state.movies } />
        <AddMovies movies={ this.state.movies } />
      </section>
    );
  }
}

export default MovieLibray;
