import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.inputReset = this.inputReset.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => {
          onClick(this.state);
          this.inputReset();
        } }
      >
        Adicionar filme
      </button>
    );
  }

  inputReset() {
    this.setState(() => initialState);
  }

  inputTitle(title) {
    return (
      <label htmlFor="titleInput" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="titleInput"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  inputSubtitle(subtitle) {
    return (
      <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
          id="subtitle-input-label"
        />
      </label>
    );
  }

  inputImage(imagePath) {
    return (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
          id="image-input-label"
        />
      </label>
    );
  }

  inputStoryline(storyline) {
    return (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
          id="storyline-input-label"
        />
      </label>
    );
  }

  inputRating(rating) {
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
          id="rating-input-label"
        />
      </label>
    );
  }

  inputGenre(genre) {
    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
          id="genre-input-label"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const {
      title, subtitle, imagePath,
      storyline, rating, genre,
    } = this.state;
    return (
      /** Consultei o repositório da Marcela Silva para refatorar e resolver os erros de lint dessa parte.
       * Link do repositório https://github.com/tryber/sd-012-project-movie-cards-library-stateful/pull/16 */
      <form data-testid="add-movie-form">
        { this.inputTitle(title) }
        { this.inputSubtitle(subtitle) }
        { this.inputImage(imagePath) }
        { this.inputStoryline(storyline) }
        { this.inputRating(rating) }
        { this.inputGenre(genre) }
        { this.handleSubmit() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
