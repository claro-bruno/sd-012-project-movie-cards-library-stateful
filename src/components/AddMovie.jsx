// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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

  handleChange() {
    this.setState((estadoAnterior) => ({
      title: estadoAnterior.title,
      subtitle: estadoAnterior.subtitle,
      imagePath: estadoAnterior.imagePath,
      storyline: estadoAnterior.storyline,
      rating: estadoAnterior.rating,
      genre: estadoAnterior.genre,
    }));
  }

  titleInput(title) {
    const input = (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="input-title"
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
          name="input-subtitle"
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
          name="input-image"
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
          name="input-sinopse"
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
          name="input-rating"
          id="input-rating"
          defaultValue={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
        />
      </label>
    );
    return input;
  }

  render() {
    const { onclick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.titleInput(title) }
        { this.subtitleInput(subtitle) }
        { this.imagePath(imagePath) }
        { this.textArea(storyline) }
        { this.ratingInput(rating) }
        { onclick }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};

export default AddMovie;
