import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';

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

  render() {
    const { title, subtitle, imagePath, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Input
          type="text"
          name="title"
          label="Título"
          value={ title }
          callback={ this.handleChange }
        />

        <Input
          type="text"
          name="subtitle"
          label="Subtítulo"
          value={ subtitle }
          callback={ this.handleChange }
        />

        <Input
          type="text"
          name="imagePath"
          label="Imagem"
          value={ imagePath }
          callback={ this.handleChange }
        />

        <Input
          type="number"
          name="rating"
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
