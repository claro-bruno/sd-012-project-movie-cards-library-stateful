import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePathInput from './ImagePathInput';
import TextAreaInput from './TextAreaInput';
import RatingInput from './RatingInput';
import SelectInput from './SelectInput';
import ButtonForm from './ButtonForm';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);

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
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  resetState() {
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
          valueTextAreaInput={ storyline }
          handleChangeTextArea={ this.handleChange }
        />
        <RatingInput
          valueRatingInput={ rating }
          handleChangeRating={ this.handleChange }
        />
        <SelectInput
          valueSelectInput={ genre }
          handleChangeSelect={ this.handleChange }
        />
        <ButtonForm
          onClick={ this.handleSubmit }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
