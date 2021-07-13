// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieImage from './AddMovieImage';
import AddMovieRating from './AddMovieRating';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieTitle from './AddMovieTitle';
import AddMovieGenre from './AddMovieGenre';

const stateDefault = {
  title: '',
  subtitle: '',
  storyLine: '',
  rating: 0,
  imagePath: '',
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = stateDefault;

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.check : target.value;

    this.setState({
      [name]: name === 'rating' ? Number(value) : value,
    });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(stateDefault);
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieTitle
          value={ title }
          onChange={ this.handleChange }
        />
        <AddMovieSubtitle
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <AddMovieImage
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <AddMovieStoryline
          value={ storyLine }
          onChange={ this.handleChange }
        />
        <AddMovieRating
          value={ rating }
          onChange={ this.handleChange }
        />
        <AddMovieGenre
          value={ genre }
          onChange={ this.handleChange }
        />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.addMovie }
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

export default AddMovie;
