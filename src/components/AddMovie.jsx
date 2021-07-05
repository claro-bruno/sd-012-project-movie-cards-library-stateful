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
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImagePathChange = this.handleChange.bind(this);
    this.handleTextAreaChange = this.handleChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
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

  handleGenreChange(event) {
    this.setState({ genre: event.target.value });
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
        <Input name="subtitle" type="text" value={ subtitle } label="Subtítulo"
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
        <Input name="rating" type="number" value={ rating } label="Avaliação"
          handleChange={ this.handleChange }
        />
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select data-testid="genre-input" name="genre" value={ genre }
            onChange={ this.handleGenreChange }
          >
            <option data-testid="genre-option" value="action"> Ação </option>
            <option data-testid="genre-option" value="comedy"> Comédia </option>
            <option data-testid="genre-option" value="thriller"> Suspense </option>
          </select>

        </label>
      </form>
    );
  }
}

export default AddMovie;
