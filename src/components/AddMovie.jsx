import React from 'react';
import PropTypes from 'prop-types';
import AddMovieInputTitle from './formComponents/AddMovieInputTitle';
import AddMovieInputSubtitle from './formComponents/AddMovieInputSubtitle';
import AddMovieInputImagePath from './formComponents/AddMovieInputImagePath';
import AddMovieTextarea from './formComponents/AddMovieTextarea';
import AddMovieInputRating from './formComponents/AddMovieInputRating';
import AddMovieSelect from './formComponents/AddMovieSelect';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.cHandler = this.cHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  cHandler(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  submitHandler() {
    // e.preventDefault();
    const { onClick } = this.props;
    const newMovie = this.state;
    onClick(newMovie);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      rating,
      title,
      subtitle,
      imagePath,
      storyline,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form" onSubmit={ (e) => { e.preventDefault(); } }>
        <AddMovieInputTitle value={ title } cHandler={ this.cHandler } />
        <AddMovieInputSubtitle value={ subtitle } cHandler={ this.cHandler } />
        <AddMovieInputImagePath value={ imagePath } cHandler={ this.cHandler } />
        <AddMovieTextarea value={ storyline } cHandler={ this.cHandler } />
        <AddMovieInputRating value={ rating } cHandler={ this.cHandler } />
        <AddMovieSelect value={ genre } cHandler={ this.cHandler } />
        <button
          onClick={ this.submitHandler }
          data-testid="send-button"
          type="button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
