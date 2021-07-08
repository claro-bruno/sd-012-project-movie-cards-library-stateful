import React from 'react';
import MovieSubtitle from './NewComponents/MovieSubtitle';
import MovieTitle from './NewComponents/MovieTitle';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <MovieTitle />
          <MovieSubtitle />
        </form>

      </div>
    );
  }
}

export default AddMovie;
