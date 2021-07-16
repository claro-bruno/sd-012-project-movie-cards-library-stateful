import React, { Component } from 'react';
import AutoForm from './AutoForm';

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

        {/* Achei muito legal essa idéia do Leonardo Ferreira de fazer */}
        {/* um componente altamente dinãmido e decidir fazer algo parecido! */}

        <AutoForm
          valueTitle={ title }
          labelHtmlFor="title-input"
          labelDataTestId="title-input-label"
          labelTitle="Título"
          onChange={ this.textInputHandler }
          nameInput="title"
        />
        <AutoForm
          valueTitle={ subtitle }
          labelHtmlFor="subtitle-input"
          labelDataTestId="subtitle-input-label"
          labelTitle="Subtítulo"
          onChange={ this.textInputHandler }
          nameInput="subtitle"
        />
        <AutoForm
          valueTitle={ imagePath }
          labelHtmlFor="image-input"
          labelDataTestId="image-input-label"
          labelTitle="Imagem"
          onChange={ this.textInputHandler }
          nameInput="imagePath"
        />
      </form>
    );
  }
}

export default AddMovie;
