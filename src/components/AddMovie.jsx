import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { title, subtitle, imagePath, rating, genre, storyline } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Input
          type="text"
          name="title"
          id="title"
          label="Título"
          value={ title }
          callback={ this.handleChange }
        />

        <Input
          type="text"
          name="subtitle"
          id="subtitle"
          label="Subtítulo"
          value={ subtitle }
          callback={ this.handleChange }
        />

        <Input
          type="text"
          name="imagePath"
          id="image"
          label="Imagem"
          value={ imagePath }
          callback={ this.handleChange }
        />

        <TextArea
          name="storyline"
          label="Sinopse"
          value={ storyline }
          callback={ this.handleChange }
        />

        <Input
          type="number"
          name="rating"
          id="rating"
          label="Avaliação"
          value={ rating }
          callback={ this.handleChange }
        />

        <Select
          name="genre"
          label="Gênero"
          value={ genre }
          callback={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
