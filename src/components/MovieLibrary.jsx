import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

class MovieLibrary extends React.Component {
  render() {
    const { movies } = this.props;
    const { textInput, favoritesOnly, genreOption } = this.props;

    return (
      <div>
        <SearchBar
          searchText={ textInput }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ favoritesOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ genreOption }
          onSelectedGenreChange={ this.handleChange }
        />

        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard movie={ movie } key={ `Movie Title ${index + 1}` } />
          ))}
        </div>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  textInput: PropTypes.string.isRequired,
  favoritesOnly: PropTypes.string.isRequired,
  genreOption: PropTypes.string.isRequired,
};

export default MovieLibrary;
