// implement AddMovie component here
import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          name="title"
          value={ title }
          handleChange={ this.handleChange }
          type="text"
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
          type="text"
        />
        <Input
          label="Imagem"
          name="image"
          value={ imagePath }
          handleChange={ this.handleChange }
          type="text"
        />
        <TextArea
          label="Sinopse"
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
          type="textarea"
        />

        <Input
          label="Avaliação"
          name="rating"
          value={ rating }
          handleChange={ this.handleChange }
          type="number"
        />
        <Select
          label="Gênero"
          name="genre"
          value={ genre }
          handleChange={ this.handleChange }
          type="text"
        />
      </form>
    );
  }
}

export default AddMovie;
