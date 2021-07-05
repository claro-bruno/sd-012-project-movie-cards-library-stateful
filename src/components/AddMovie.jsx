// implement AddMovie component here
import React from 'react';
// import PropType from 'prop-types';
import Input from './Input';
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
      genre: 'action',
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
          type="text"
          value={ title }
          handleChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          type="text"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <Input
          type="text"
          label="Imagem"
          name="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <Input
          type="textarea"
          label="Sinopse"
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <Input
          type="number"
          label="Avaliação"
          name="rating"
          value={ rating }
          handleChange={ this.handleChange }
        />
        <Select
          type="select"
          label="Gênero"
          name="genre"
          value={ genre }
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
