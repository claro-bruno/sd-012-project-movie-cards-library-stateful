import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './AddMovieComponents/InputTitle';
import InputSubtitle from './AddMovieComponents/InputSubtitle';
import InputImage from './AddMovieComponents/InputImage';
import TextAreaStoryline from './AddMovieComponents/TextAreaStoryline';
import InputRating from './AddMovieComponents/InputRating';
import SelectGenres from './AddMovieComponents/SelectGenres';
import ButtonSend from './AddMovieComponents/ButtonSend';

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

  handleClick(callBack) {
    callBack(this.state);
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
        <TextAreaStoryline onChange={ this.handleChange } value={ storyline } />
        <InputRating onChange={ this.handleChange } value={ Number(rating) } />
        <SelectGenres onChange={ this.handleChange } value={ genre } />
        <ButtonSend onClick={ () => this.handleClick(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
