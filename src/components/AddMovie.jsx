import React from 'react';
import AddMovieImg from './AddMovieComponents/AddMovieImg';
import AddMovieSubtitle from './AddMovieComponents/AddMovieSubtitle';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';
import AddMovieStoryLine from './AddMovieComponents/AddMovieStoryLine';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle />
        <AddMovieSubtitle />
        <AddMovieImg />
        <AddMovieStoryLine />
      </form>
    );
  }
}

export default AddMovie;
