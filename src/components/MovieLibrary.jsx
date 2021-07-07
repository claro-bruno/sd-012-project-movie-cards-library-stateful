// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...props.movies],
    };

    this.handleChange = this.handleChange.bind(this);
    this.funcFilter = this.funcFilter.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  // O trecho a seguir é retirado do projeto da colega Caroline Benichio
  // Fonte: https://github.com/tryber/sd-012-project-movie-cards-library-stateful/tree/caroline-benichio-movie-cards-library-stateful

  onClick(newMovie) { // feito em conjunto com Lucas, Gui e Gabriel
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  funcFilter() { // feito em conjunto com Lucas, Gui e Gabriel
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    return (movies.filter((movie) => (
      (movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()))
      && (bookmarkedOnly ? movie.bookmarked : true)
      && movie.genre.includes(selectedGenre)
    )));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.funcFilter() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
