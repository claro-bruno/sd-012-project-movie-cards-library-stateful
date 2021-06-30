import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      movies,
      textInput: '',
      genreOption: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  changeMovieList(movie) {
    this.setState()
  }

  render() {
    const { movies } = this.state;
    const { textInput, favoritesOnly, genreOption } = this.state;

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
            movies={ movies }
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
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieLibrary;
