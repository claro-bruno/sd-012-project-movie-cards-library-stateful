import React from 'react';
import GenericInput from './GenericInput';

class AddMovie extends React.Component {
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
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
    console.log(name);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <GenericInput
          label="Título"
          name="title"
          id="title-input"
          value={ title }
          type="text"
          onChange={ this.onChangeHandler }
        />
        <GenericInput
          label="Subtítulo"
          name="subtitle"
          id="subtitle-input"
          value={ subtitle }
          type="text"
          onChange={ this.onChangeHandler }
        />
        <GenericInput
          label="Imagem"
          name="imagePath"
          id="image-input"
          value={ imagePath }
          type="text"
          onChange={ this.onChangeHandler }
        />
      </form>
    );
  }
}

export default AddMovie;
