import React from 'react';
import Input from './Input';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      ...this.state, [name]: value,
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
          label="Título"
          dataLabel="title-input-label"
          dataInput="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          dataLabel="subtitle-input-label"
          dataInput="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          dataLabel="image-input-label"
          dataInput="image-input"
          name="image"
          type="text"
          value={ imagePath }
          // value={ imagePath }
          onChange={ this.handleChange }
        />

        <Input
          label="Avaliação"
          dataLabel="rating-input-label"
          dataInput="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
