import React, { Component } from 'react';
import Input from './addmovie-components/Input';

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
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Input
          labelText="Título"
          dataTestIdLabel="title-input-label"
          type="text"
          name="title"
          id="title-input"
          dataTestIdInput="title-input"
          value={ title }
          handleChange={ this.handleChange }
        />
        <Input
          labelText="Subtítulo"
          dataTestIdLabel="subtitle-input-label"
          type="text"
          name="subtitle"
          id="subtitle-input"
          dataTestIdInput="subtitle-input"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <Input
          labelText="Imagem"
          dataTestIdLabel="image-input-label"
          type="text"
          name="imagePath"
          id="image-input"
          dataTestIdInput="image-input"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
