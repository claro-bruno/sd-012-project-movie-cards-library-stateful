import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };
    this.textInputHandler = this.textInputHandler.bind(this);
  }

  // Este trecho do código foi resolvido com ajuda do projeto do Leonardo Ferreira.

  textInputHandler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.textInputHandler }
            name="title"
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.textInputHandler }
            name="subtitle"
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.textInputHandler }
            name="image"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
