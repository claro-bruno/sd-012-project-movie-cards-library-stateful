// implement AddMovie component here
import React from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import Image from './Image';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, rating, storyline, genre } = this.state;
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
        <Image
          name="imagePath"
          type="text"
          value={ imagePath }
          label="Imagem"
          handleChange={ this.handleChange }
        />
        <TextArea
          name="storyline"
          type="text"
          value={ storyline }
          label="Sinopse"
          handleChange={ this.handleChange }
        />
        <Input
          name="rating"
          type="number"
          value={ rating }
          label="Avaliação"
          handleChange={ this.handleChange }
        />
        <Select
          name="genre"
          value={ genre }
          type="select"
          label="Gênero"
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
