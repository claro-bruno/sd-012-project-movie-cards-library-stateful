import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import MovieInfos from './MovieInfos';
import Select from './Select';
import Button from './Button';
import { genres } from '../data';

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
    onClick(INITIAL_STATE);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <MovieInfos
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
