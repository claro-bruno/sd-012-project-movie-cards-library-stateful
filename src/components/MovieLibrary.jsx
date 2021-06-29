// implement MovieLibrary component here
import React, { Component } from 'react';
import { shape, string, number, bool } from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onClick = (newMovie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  };

  handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    this.setState({
      [name]: (type === 'checkbox' ? checked : value),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const { onClick, handleChange } = this;
    return (
      <div>
        <br />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList
          movies={ movies.filter((movie) => (
            (movie.title.includes(searchText)
            || movie.subtitle.includes(searchText)
            || movie.storyline.includes(searchText))
            && (bookmarkedOnly ? movie.bookmarked : !0)
            && movie.genre.includes(selectedGenre))) }
        />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: shape({
    title: string.isRequired,
    subtitle: string.isRequired,
    storyline: string.isRequired,
    rating: number.isRequired,
    imagePath: string.isRequired,
    bookmarked: bool.isRequired,
    genre: string.isRequired,
  }).isRequired,
};

export default MovieLibrary;
