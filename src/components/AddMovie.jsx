// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieInputs from './AddMovieInputs';
import AddMovieTextArea from './AddMovieTextArea';
import AddMovieGenre from './AddMovieGenre';
import Button from './Button';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleRateChange(e) {
    this.setState({
      rating: Number(e.target.value),
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieInputs
          type="text"
          id="title-input"
          value={ title }
          name="title"
          onChange={ this.handleChange }
          inner="Título"
        />
        <AddMovieInputs
          type="text"
          id="subtitle-input"
          value={ subtitle }
          name="subtitle"
          onChange={ this.handleChange }
          inner="Subtítulo"
        />
        <AddMovieInputs
          type="text"
          id="image-input"
          value={ imagePath }
          name="imagePath"
          onChange={ this.handleChange }
          inner="Imagem"
        />
        <AddMovieTextArea
          value={ storyline }
          onChange={ this.handleChange }
          name="storyline"
        />
        <AddMovieInputs
          type="number"
          id="rating-input"
          value={ rating }
          name="rating"
          onChange={ this.handleRateChange }
          inner="Avaliação"
        />
        <AddMovieGenre value={ genre } onChange={ this.handleChange } />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
