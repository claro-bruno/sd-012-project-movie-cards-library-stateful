// implement AddMovie component here
import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          name="title"
          type="text"
          value={ title }
          label="Título"
          handleChange={ this.handleChange }
        />
        <Input
          name="subtitle"
          type="text"
          value={ subtitle }
          label="Subtítulo"
          handleChange={ this.handleChange }
        />
        <Input
          name="image"
          type="image"
          value={ imagePath }
          label="Imagem"
          handleChange={ this.handleChange }
        />
        <Input
          name="rating"
          type="number"
          value={ rating }
          label="Avaliação"
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
