import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  // Utilização de props e movie: stateMovie feita com base no código do colega Roberval Filho: https://github.com/tryber/sd-012-project-movie-cards-library-stateful/pull/99/commits/3931e75aad2db656b0d36698f552588b09c884c7
  constructor(props) {
    super();
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    // this.wantedMovies = this.wantedMovies.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  // bookmarkedMovies(allMovies) {
  //   const { bookmarkedOnly } = this.state;
  //   const bookmarkedFilter = allMovies.filter();
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies: stateMovies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ stateMovies } />
        <AddMovie onClick={ (state) => console.log(state) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieLibrary;
