// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.state = initialState;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClickBtn() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  titleInput(title) {
    const input = (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="input-title"
          defaultValue={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
    );
    return input;
  }

  subtitleInput(subtitle) {
    const input = (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="input-subtitle"
          defaultValue={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
    return input;
  }

  imagePath(inputImage) {
    const input = (
      <label htmlFor="input-image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="input-image"
          defaultValue={ inputImage }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
    return input;
  }

  textArea(storyline) {
    const textArea = (
      <label htmlFor="input-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="input-sinopse"
          cols="30"
          rows="10"
          defaultValue={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
    return textArea;
  }

  ratingInput(rating) {
    const input = (
      <label htmlFor="input-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="input-rating"
          defaultValue={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
        />
      </label>
    );
    return input;
  }

  genreSelect(genre) {
    const select = (
      <label htmlFor="select-genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="select-genre"
          defaultValue={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
    return select;
  }

  button() {
    const button = (
      <button
        type="button"
        onClick={ this.onClickBtn }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
    return button;
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.titleInput(title) }
        { this.subtitleInput(subtitle) }
        { this.imagePath(imagePath) }
        { this.textArea(storyline) }
        { this.ratingInput(rating) }
        { this.genreSelect(genre) }
        { this.button() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
