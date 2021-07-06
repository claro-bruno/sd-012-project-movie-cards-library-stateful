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
      movies: props.movies,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(movie) {
    const { subtitle, imagePath, genre, rating, storyline, title } = movie;
    const { movies } = this.state;
    const newObj = {
      title,
      subtitle,
      imagePath,
      genre,
      rating,
      storyline,
      bookmarked: false,
    };
    console.log(movie);
    this.setState({
      movies: [...movies, newObj],
    });
  }

  // handleTextChange(event) {
  //   this.setState();
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
