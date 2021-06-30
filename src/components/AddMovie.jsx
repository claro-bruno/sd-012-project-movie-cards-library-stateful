import React from 'react';
import AddMovieTitle from './AddMovieTitle ';
import AddMovieSubTitle from './AddMovieSubtitle';
import AddMovieGenre from './AddMovieGenre';
import AddMovieRating from './AddMovieRating';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieImagePath from './AddMovieImagePath';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.setState({
      [event.target.name]: event.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle onChange={ this.changeValue } value={ title } />
        <AddMovieSubTitle onChange={ this.changeValue } value={ subtitle } />
        <AddMovieImagePath onChange={ this.changeValue } value={ imagePath } />
        <AddMovieStoryline onChange={ this.changeValue } value={ storyline } />
        <AddMovieRating onChange={ this.changeValue } value={ rating } />
        <AddMovieGenre onChange={ this.changeValue } value={ genre } />
      </form>
    );
  }
}
export default AddMovie;
