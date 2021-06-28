import React from 'react';
import AddMovieSubtitle from './AddMovieComponents/AddMovieSubtitle';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';
import AddMovieImg from './AddMovieComponents/AddMovieImg';
import AddMovieStoryLine from './AddMovieComponents/AddMovieStoryLine';
import AddMovieRating from './AddMovieComponents/AddMovieRating';
import AddMovieGenre from './AddMovieComponents/AddMovieGenre';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle />
        <AddMovieSubtitle />
        <AddMovieImg />
        <AddMovieStoryLine />
        <AddMovieRating />
        <AddMovieGenre />
      </form>
    );
  }
}

export default AddMovie;
