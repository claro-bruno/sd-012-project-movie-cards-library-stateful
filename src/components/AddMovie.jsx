import React from 'react';
import Input from './Input';
import Select from './Select';

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
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <Input
          label="Avaliação"
          name="rating"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <Select genre={ genre } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
