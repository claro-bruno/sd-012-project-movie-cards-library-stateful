import React from 'react';
import Input from './Input';
import Textarea from './Textarea';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    /*       storyline: '',
      rating: 0,
      genre: 'action', */
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          inputId="title"
          inputName="title"
          testIdInput="title-input"
          testIdLabel="title-input-label"
          typeInput="text"
          value={ title }
          onChange={ this.handleChange }
          labelText="Título"
        />
        <Input
          inputId="subtitle"
          inputName="subtitle"
          testIdInput="subtitle-input"
          testIdLabel="subtitle-input-label"
          typeInput="text"
          value={ subtitle }
          onChange={ this.handleChange }
          labelText="Subtítulo"
        />
        <Input
          inputId="imagePath"
          inputName="imagePath"
          testIdInput="image-input"
          testIdLabel="image-input-label"
          typeInput="text"
          value={ imagePath }
          onChange={ this.handleChange }
          labelText="Imagem"
        />
        <Textarea
          textareaId="storyline"
          textareaName="storyline"
          testIdTextarea="storyline-input"
          testIdLabel="storyline-input-label"
          value={ storyline }
          onChange={ this.handleChange }
          labelText="Sinopse"
        />
      </form>
    );
  }
}

export default AddMovie;
