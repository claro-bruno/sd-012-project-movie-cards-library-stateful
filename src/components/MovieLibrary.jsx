// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState(() => ({
      searchText: value,
    }));
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState(() => ({
      bookmarkedOnly: checked,
    }));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState(() => ({
      selectedGenre: value,
    }));
  }

  onClick({ target }) {
    
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    /* const { movies } = this.props; */
    console.log(movies);

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          onBookmarkedChange={ onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <AddMovie onClick={ onClick } />
        <MovieList movies={ movies } />
      </section>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
