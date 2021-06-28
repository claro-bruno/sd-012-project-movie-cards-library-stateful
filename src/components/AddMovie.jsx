import React from 'react';
import AddMovieSubtitle from './AddMovieComponents/AddMovieSubtitle';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle />
        <AddMovieSubtitle />
      </form>
    );
  }
}

export default AddMovie;
