import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SeachBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.seachTextChange = this.seachTextChange.bind(this);
    this.bookmarkedOnlyChange = this.bookmarkedOnlyChange.bind(this);
    this.selectGenreChange = this.selectGenreChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  seachTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  bookmarkedOnlyChange({ target }) {
    const { checked } = target;
    if (checked) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  selectGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filtered = movies.map((movie) => {
      const { title, subtitle, storyline, bookmarked, genre } = movie;
      if (bookmarkedOnly && (title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText))) {
        if (genre.includes(selectedGenre) && bookmarked) {
          return movie;
        }
      } else if ((title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText))
      && genre.includes(selectedGenre)) {
        return movie;
      }
      return undefined;
    });
    return filtered.filter((obj) => obj !== undefined);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SeachBar
          searchText={ searchText }
          onSearchTextChange={ this.seachTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookmarkedOnlyChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectGenreChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.onClick } />

      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
