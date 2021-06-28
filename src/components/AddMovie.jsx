import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonAddMovie from './ButtonAddMovie';
import SelectGenre from './SelectGenre';
import RatingForAddMovie from './RatingForAddMovie';
import TextAreaForAddMovie from './TextAreaForAddMovie';

class AddMovie extends Component {
  constructor(props) {
    super(props);
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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    const { movie } = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(movie);
  }

  render() {
    const { handleClick, handleChange } = this;
    const { subtitle, title, storyline, imagePath, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            name="title"
            type="text"
            value={ title }
            onChange={ handleChange }
            data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
        <TextAreaForAddMovie handleChange={ handleChange } storyline={ storyline } />
        <RatingForAddMovie handleChange={ handleChange } rating={ rating } />
        <SelectGenre handleChange={ handleChange } genre={ genre } />
        <ButtonAddMovie handleClick={ handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func,
}.isRequired;

export default AddMovie;
