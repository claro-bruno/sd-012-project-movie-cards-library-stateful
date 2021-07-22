import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleForm from './Forms/Titleform';
import ImagePathForm from './Forms/ImagePathform';
import SubtitleForm from './Forms/Subtitleform';
import StorylineForm from './Forms/Storylineform';
import RatingForm from './Forms/Ratingform';
import GenreForm from './Forms/Genreform';
import ButtonForm from './Forms/Buttonform';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.textInputHandler = this.textInputHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  textInputHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addMovie() {
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
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleForm
          titleValue={ title }
          titleOnChange={ this.textInputHandler }
        />
        <SubtitleForm
          subtitleValue={ subtitle }
          subtitleOnChange={ this.textInputHandler }
        />
        <ImagePathForm
          imagePathValue={ imagePath }
          imagePathOnChange={ this.textInputHandler }
        />
        <StorylineForm
          storylineValue={ storyline }
          storylineOnChange={ this.textInputHandler }
        />
        <RatingForm
          ratingValue={ rating }
          ratingOnChange={ this.textInputHandler }
        />
        <GenreForm
          genreValue={ genre }
          genreOnChange={ this.textInputHandler }
        />
        <ButtonForm
          onClick={ this.addMovie }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
