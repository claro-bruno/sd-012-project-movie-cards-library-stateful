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
    this.searchTextChange = this.searchTextChange.bind(this);
    this.bookMarkedOnlyChange = this.bookMarkedOnlyChange.bind(this);
    this.selectedGenreChange = this.selectedGenreChange.bind(this);
    this.findMovie = this.findMovie.bind(this);
    this.addMovieCard = this.addMovieCard.bind(this);
  }

  searchTextChange({ target }) {
    this.setState({ searchText: target.value }, this.findMovie);
  }

  bookMarkedOnlyChange({ target }) {
    const { movies } = this.state;
    this.setState({ bookmarkedOnly: target.checked }, () => {
      this.setState({ movies: movies.filter(({ bookmarked }) => bookmarked) });
    });
  }

  selectedGenreChange({ target }) {
    const { movies } = this.state;
    this.setState({ selectedGenre: target.value }, () => {
      const { selectedGenre } = this.state;
      this.setState({ movies: movies.filter((elem) => elem.genre === selectedGenre) });
    });
  }

  findMovie() {
    let filteredMovies = '';
    const { searchText, movies } = this.state;
    if (searchText.length < 1) {
      const { movies: propMovies } = this.props;
      this.setState({ movies: propMovies });
      return;
    }
    filteredMovies = movies.filter(({ title, subtitle, storyline }) => (
      `${title}${subtitle}${storyline}`.includes(searchText)
    ));
    this.setState({ movies: filteredMovies });
  }

  addMovieCard(propsObj) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, propsObj] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookMarkedOnlyChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieCard } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
