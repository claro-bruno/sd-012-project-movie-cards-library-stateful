import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import MoviesData from './MoviesData';
import Select from './Select';
import Button from './Button';

const genres = [
  { genre: 'Ação', genreValue: 'action' },
  { genre: 'Comédia', genreValue: 'comedy' },
  { genre: 'Suspense', genreValue: 'thriller' },
];

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    const newMovie = {
      title,
      subtitle,
      storyline,
      imagePath,
      rating: +rating,
      genre,
      bookmarked: false,
    };
    onClick(newMovie);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form" className="add-movie-container">
        <MoviesData
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          onChange={ this.handleChange }
        />

        <Input
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          dataTestId="rating-input"
          onChange={ this.handleChange }
        />

        <Select
          label="Gênero"
          name="genre"
          dataTestId="genre-input"
          value={ genre }
          onChange={ this.handleChange }
          options={ genres }
        />

        <Button
          btnText="Adicionar filme"
          name="sendButton"
          dataTestId="send-button"
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.exact({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default AddMovie;
