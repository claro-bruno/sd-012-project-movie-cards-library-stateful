import React, { Component } from 'react';
import PropType from 'prop-types';
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
      movieList: movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClick(newMovie) {
    const { movieList } = this.state;
    const moviesList = [...movieList, newMovie];
    this.setState({
      movieList: moviesList,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movieList } = this.state;
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
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ movieList } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropType.arrayOf(PropType.exact({
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    storyline: PropType.string.isRequired,
    rating: PropType.number.isRequired,
    imagePath: PropType.string.isRequired,
    bookmarked: PropType.bool.isRequired,
    genre: PropType.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;
