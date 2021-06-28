import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './AddMovieComponents/InputTitle';
import InputSubtitle from './AddMovieComponents/InputSubtitle';
import InputImage from './AddMovieComponents/InputImage';
import TextAreaStoryline from './AddMovieComponents/TextAreaStoryline';
import InputRating from './AddMovieComponents/InputRating';
// import Select from './generics/Select';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    //   genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  render() {
    const { onClick } = this.props;

    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
    //   genre,
    } = this.state;
    return (
      <form className="form-addMovie" data-testid="add-movie-form">

        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle onChange={ this.handleChange } value={ subtitle } />
        <InputImage onChange={ this.handleChange } value={ imagePath } />
        <TextAreaStoryline onChange={ this.handleChange } value={ storyline } />
        <InputRating onChange={ this.handleChange } value={ Number(rating) } />
        <button type="submit" onClick={ onClick }>Adicionar</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
