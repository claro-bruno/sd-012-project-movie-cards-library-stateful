import React, { Component } from 'react';
import MovieTitle from './MovieCards/MovieTitle';
import MovieSubtitle from './MovieCards/MovieSubtitle';
import MovieImage from './MovieCards/MovieImage';
import MovieStory from './MovieCards/MovieStory';
import MovieRating from './MovieCards/MovieRating';
import MovieGenre from './MovieCards/MovieGenre';

class AddMovie extends Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <MovieTitle />
        <MovieSubtitle />
        <MovieImage />
        <MovieStory />
        <MovieRating />
        <MovieGenre />
      </form>
    );
  }
}

export default AddMovie;
