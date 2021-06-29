import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.movieFilter = this.movieFilter.bind(this);
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, this.movieFilter);
  }

  onBookmarkedChange({ target }) {
    console.log('onbookmarchange');
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    console.log('onselectedgenre');
    this.setState({ selectedGenre: target.value });
  }

  movieFilter() {
    console.log('moviefilter');
    const { searchText, movies } = this.state;
    if (searchText.length < 1) {
      const { movies: propMovies } = this.props;
      this.setState({ movies: propMovies });
      return;
    }
    const filteredMovies = movies.filter(({ title, subtitle, storyline }) => {
      const concatString = `${title}${subtitle}${storyline}`;
      return concatString.includes(searchText);
    });
    this.setState({ movies: filteredMovies });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
