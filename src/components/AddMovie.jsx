import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import MovieHeader from './MovieHeader';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) { // exemplo dado no vídeo do Course
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
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
    const { imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <MovieHeader />
        <Input
          inputLabel="Imagem"
          inputType="text"
          inputName="image"
          dataTestIdLabel="image-input-label"
          dataTestId="image-input"
          inputValue={ imagePath }
          onChangeInput={ this.handleChange }
        />
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <Input
          inputLabel="Avaliação"
          inputType="number"
          inputName="rating"
          dataTestIdLabel="rating-input-label"
          dataTestId="rating-input"
          inputValue={ rating }
          onChangeInput={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.shape({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default AddMovie;
