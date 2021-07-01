import React, { Component } from 'react';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  storyline: '',
  genre: 'action',
  imagePath: '',
  rating: 0,
};

class AddMovie extends Component {
  constructor() {
    super();

    this.changeHandler = this.changeHandler.bind(this);

    this.state = INITIAL_STATE;
  }

  changeHandler(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, storyline, genre, imagePath, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            name="title"
            type="text"
            value={ title }
            onChange={ this.changeHandler }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.changeHandler }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.changeHandler }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            name="storyline"
            value={ storyline }
            onChange={ this.changeHandler }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            name="rating"
            type="number"
            value={ rating }
            onChange={ this.changeHandler }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            name="genre"
            value={ genre }
            onChange={ this.changeHandler }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ onClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
