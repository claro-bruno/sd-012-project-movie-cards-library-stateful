import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInputGeneric from './TitleInputGeneric';
import SubtitleInputGeneric from './SubtitleInputGeneric';
import ImageInputGeneric from './ImageInputGeneric';
import TextAreaInputGeneric from './TextAreaInputGeneric';
import RatingInputGeneric from './RatingInputGeneric';
import SelectInputGeneric from './SelectInputGeneric';
import ButtonSubmit from './ButtonSubmit';

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

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
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
        <TitleInputGeneric
          valueTitleInput={ title }
          handleChangeTitle={ this.handleChange }
        />
        <SubtitleInputGeneric
          valueSubtitleInput={ subtitle }
          handleChangeSubtitle={ this.handleChange }
        />
        <ImageInputGeneric
          valueImageInput={ imagePath }
          handleChangeImage={ this.handleChange }
        />
        <TextAreaInputGeneric
          valueTextAreaInput={ storyline }
          handleChangeTextArea={ this.handleChange }
        />
        <RatingInputGeneric
          valueRatingInput={ rating }
          handleChangeRating={ this.handleChange }
        />
        <SelectInputGeneric
          valueSelectInput={ genre }
          handleChangeSelect={ this.handleChange }
        />
        <ButtonSubmit
          onClick={ this.handleSubmit }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.action,
}.isRequired;

export default AddMovie;
