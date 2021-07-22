import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './inputsAddMovie/TitleInput';
import SubtitleInput from './inputsAddMovie/SubtitleInput';
import ImageImput from './inputsAddMovie/ImageInput';
import StorylineInput from './inputsAddMovie/StorylineInput';
import RatingInput from './inputsAddMovie/RatingInput';
import GenreInput from './inputsAddMovie/GenreInput';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } handleChange={ this.handleChange } />
        <SubtitleInput value={ subtitle } handleChange={ this.handleChange } />
        <ImageImput value={ imagePath } handleChange={ this.handleChange } />
        <StorylineInput value={ storyline } handleChange={ this.handleChange } />
        <RatingInput value={ rating } handleChange={ this.handleChange } />
        <GenreInput value={ genre } handleChange={ this.handleChange } />

        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
