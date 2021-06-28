// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;

    this.changeHandler = this.changeHandler.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
  }

  // Requisito 14 - Ajudas da monitora Letícia e do colega Eric.
  handleSubmit() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => {
          onClick(this.state);
          this.resetInputs();
        } }
      >
        Adicionar filme
      </button>
    );
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  titleInput(title) {
    return (
      <label htmlFor="titleInput" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="titleInput"
          value={ title }
          onChange={ this.changeHandler }
          data-testid="title-input"
        />
      </label>
    );
  }

  subtitleInput(subtitle) {
    return (
      <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitleInput"
          value={ subtitle }
          onChange={ this.changeHandler }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  imageInput(imagePath) {
    return (
      <label htmlFor="imageInput" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imageInput"
          value={ imagePath }
          onChange={ this.changeHandler }
          data-testid="image-input"
        />
      </label>
    );
  }

  storylineInput(storyline) {
    return (
      <label htmlFor="storylineInput" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          id="storylineInput"
          value={ storyline }
          onChange={ this.changeHandler }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  ratingInput(rating) {
    return (
      <label htmlFor="ratingInput" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="ratingInput"
          value={ rating }
          onChange={ this.changeHandler }
          data-testid="rating-input"
        />
      </label>
    );
  }

  genreSelect(gender) {
    return (
      <label htmlFor="gnrerSelect" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genreSelect"
          value={ gender }
          onChange={ this.changeHandler }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>

    );
  }

  resetInputs() {
    this.setState(() => INITIAL_STATE);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        { this.titleInput(title) }
        { this.subtitleInput(subtitle) }
        { this.imageInput(imagePath) }
        { this.storylineInput(storyline) }
        { this.ratingInput(rating) }
        { this.genreSelect(genre) }
        { this.handleSubmit() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
