import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    //  const { movies } = this.props;
    /*
    this.state = {
      movies,
      textInput: '',
      genreOption: '',
      favoritesOnly: '',
    };
*/
    this.handleChange = this.handleChange.bind(this);
    this.changeMovieList = this.changeMovieList.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
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
        <div>
          <MovieList
            movies={ filterMovies }
            searchText={ textInput }
            bookmarkedOnly={ favoritesOnly }
            selectedGenre={ genreOption }
          />
        </div>
        <AddMovie
          onClick={ this.changeMovieList }
        />
      </div>

    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;
