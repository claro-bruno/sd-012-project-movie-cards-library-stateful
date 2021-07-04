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

    this.handleChange = this.handleChange.bind(this);
    this.handleMoviePush = this.handleMoviePush.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleMoviePush(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const moviesFiltered = movies.reduce((acc, cur) => {
      const { title, subtitle, storyline } = cur;

      if (title.toLowerCase().includes(searchText.toLowerCase())
        || subtitle.toLowerCase().includes(searchText.toLowerCase())
        || storyline.toLowerCase().includes(searchText.toLowerCase())) {
        acc.push(cur);
      }

      if (bookmarkedOnly) {
        acc = acc.filter(({ bookmarked }) => bookmarked);
      }

      if (selectedGenre !== '') {
        acc = acc.filter(({ genre }) => genre === selectedGenre);
      }

      return acc;
    }, []);

    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={ moviesFiltered }
        />
        <AddMovie onClick={ this.handleMoviePush } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool.isRequired,
      genre: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieLibrary;
