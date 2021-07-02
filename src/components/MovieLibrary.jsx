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
    this.changeMovieList = this.changeMovieList.bind(this);

    this.state = {
      movies,
      textInput: '',
      genreOption: '',
      favoritesOnly: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  changeMovieList(newMovie) {
    // fundão brabo fizemo junto

    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
    }));
  }

  render() {
    const { movies } = this.state;
    const { textInput, favoritesOnly, genreOption } = this.state;

    const filteredMovies = movies
      .filter(({ bookmarked }) => !favoritesOnly || bookmarked)
      .filter(
        ({ title, subtitle, storyline }) => title.includes(textInput)
              || subtitle.includes(textInput)
              || storyline.includes(textInput),
      )
      .filter(({ genre }) => genre.includes(genreOption));

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
            movies={ filteredMovies }
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
