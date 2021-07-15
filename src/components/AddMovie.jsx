import React from 'react';
import Input from './Input';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath,
      storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          name="title"
          type="text"
          value={ title }
          handleChange={ this.handleChange }
          dataTestId="title-input"
          id="title"
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          type="text"
          value={ subtitle }
          handleChange={ this.handleChange }
          dataTestId="subtitle-input"
          id="subtitle"
        />
        <Input
          label="Imagem"
          name="imagePath"
          type="text"
          value={ imagePath }
          handleChange={ this.handleChange }
          dataTestId="image-input"
          id="imagePath"
        />
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            id="storyline"
          />
        </label>
        <Input
          label="Avaliação"
          name="rating"
          type="number"
          value={ rating }
          handleChange={ this.handleChange }
          dataTestId="rating-input"
          id="rating"
        />
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
            id="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
