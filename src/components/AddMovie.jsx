import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

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
    return (
      <form data-testid="add-movie-form">
        <Input
          inputLabel="Título"
          inputType="text"
          inputName="title"
          dataTestIdLabel="title-input-label"
          dataTestId="title-input"
          inputValue={ this.title }
          onChangeInput={ this.handleChange }
        />
        <Input
          inputLabel="Subtítulo"
          inputType="text"
          inputName="subtitle"
          dataTestIdLabel="subtitle-input-label"
          dataTestId="subtitle-input"
          inputValue={ this.subtitle }
          onChangeInput={ this.handleChange }
        />
        <Input
          inputLabel="Imagem"
          inputType="text"
          inputName="image"
          dataTestIdLabel="image-input-label"
          dataTestId="image-input"
          inputValue={ this.imagePath }
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
