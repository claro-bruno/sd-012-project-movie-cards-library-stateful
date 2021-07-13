import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
    this.textInputHandler = this.textInputHandler.bind(this);
  }

  // Este trecho do código foi resolvido com ajuda do projeto do Leonardo Ferreira.

  textInputHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            id="title-input"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.textInputHandler }
            name="title"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle-input"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.textInputHandler }
            name="subtitle"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            id="image-input"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.textInputHandler }
            name="image"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Imagem
          <textarea
            id="storyline-input"
            type="text"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.textInputHandler }
            name="storyline"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
