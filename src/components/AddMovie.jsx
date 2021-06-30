import React from 'react';
import PropTypes from 'prop-types';
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
    this.returnValue = this.returnValue.bind(this);
  }

  changeValue(event) {
    this.setState({
      [event.target.name]: event.target.value });
  }

  returnValue() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
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
        <button onClick={ this.returnValue } data-testid="send-button" type="button">
          Adicionar filme
        </button>
      </form>
    );
  }
}
export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
