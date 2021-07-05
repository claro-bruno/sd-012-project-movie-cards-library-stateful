import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import MovieHeader from './MovieHeader';
import SelectAdd from './SelectAdd';
import Button from './Button';

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
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
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
    const { rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <MovieHeader />
        <Input
          inputLabel="Imagem"
          inputType="text"
          inputName="image"
          dataTestIdLabel="image-input-label"
          dataTestId="image-input"
          inputValue={ this.imagePath }
          onChangeInput={ this.handleChange }
        />
        <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline-input"
            value={ this.storyline }
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
        <SelectAdd
          dataId="genre-option"
          inputLabel="Gênero"
          inputValue={ genre }
          inputLabelId="genre-input-label"
          dataTestId="genre-input"
          onChange={ this.handleChange }
          name="genre"
        />
        <Button onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.shape({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default AddMovie;
