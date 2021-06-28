import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePathInput from './ImagePathInput';
import TextAreaInput from './TextAreaInput';
import RatingInput from './RatingInput';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      // genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput valueTitleInput={ title } handleChangeTitle={ this.handleChange } />
        <SubtitleInput
          valueSubtitleInput={ subtitle }
          handleChangeSubtitle={ this.handleChange }
        />
        <ImagePathInput
          valueImageInput={ imagePath }
          handleChangeImage={ this.handleChange }
        />
        <TextAreaInput
          valueTextAreaInput={ storyLine }
          handleChangeTextArea={ this.handleChange }
        />
        <RatingInput
          valueRatingInput={ rating }
          handleChangeRating={ this.handleChange }
        />
        {onClick}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
