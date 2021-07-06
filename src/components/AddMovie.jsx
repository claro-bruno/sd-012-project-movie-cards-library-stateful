import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieTitle from './MovieCards/MovieTitle';
import MovieSubtitle from './MovieCards/MovieSubtitle';
import MovieImage from './MovieCards/MovieImage';
import MovieStory from './MovieCards/MovieStory';
import MovieRating from './MovieCards/MovieRating';
import MovieGenre from './MovieCards/MovieGenre';
import ButtonAddMovie from './ButtonAddMovie';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleCLick(callback) {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <MovieTitle title={ title } onTitleTextChange={ this.handleChange } />
        <MovieSubtitle subtitle={ subtitle } onSubtitleChange={ this.handleChange } />
        <MovieImage image={ imagePath } onImageTextChange={ this.handleChange } />
        <MovieStory sotyline={ storyline } onStoryTextChange={ this.handleChange } />
        <MovieRating rating={ rating } onRatingNumberChange={ this.handleChange } />
        <MovieGenre genre={ genre } onGenreChange={ this.handleChange } />

        <ButtonAddMovie Click={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
