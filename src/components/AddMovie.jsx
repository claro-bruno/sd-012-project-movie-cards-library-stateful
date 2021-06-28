import React from 'react';
import AddMovieTitle from './AddMovieComponents/AddMovieTitle';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle />
      </form>
    );
  }
}

export default AddMovie;
