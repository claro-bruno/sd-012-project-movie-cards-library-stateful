import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import TextAreaStoryline from './TextAreaStoryline';
import InputRating from './InputRating';
import SelectedGenres from './SelectedGenres';
import ButtonSend from './ButtonSend';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  handleClick(e, callBack) {
    e.preventDefault();
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    const newMovie = {
      title,
      subtitle,
      imagePath,
      storyline,
      rating: Number(rating),
      genre,
    };

    callBack(newMovie);

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
    const { onClick } = this.props;

    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form className="form-addMovie" data-testid="add-movie-form">

        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle onChange={ this.handleChange } value={ subtitle } />
        <InputImage onChange={ this.handleChange } value={ imagePath } />
        <InputRating onChange={ this.handleChange } value={ Number(rating) } />
        <SelectedGenres onChange={ this.handleChange } value={ genre } />
        <TextAreaStoryline onChange={ this.handleChange } value={ storyline } />

        <ButtonSend onClick={ (e) => this.handleClick(e, onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
