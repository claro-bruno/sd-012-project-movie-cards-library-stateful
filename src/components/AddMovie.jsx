// implement AddMovie component here
import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      rating: 0,
      imagePath: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImagePathChange = this.handleChange.bind(this);
    this.handleTextAreaChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleImagePathChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleStoryLineChange(event) {
    this.setState({ storyline: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, rating, storyline } = this.state;
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
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.handleImagePathChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="textarea">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="textarea"
            value={ storyline }
            onChange={ this.handleImagePathChange }
          />
        </label>
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
