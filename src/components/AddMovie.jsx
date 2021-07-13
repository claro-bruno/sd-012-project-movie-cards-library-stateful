import React, { Component } from 'react';
import TitleForm from './TitleForm';

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
        <TitleForm
          valueTitle={ title }
        />
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
            name="imagePath"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
