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

    this.state = initialState;
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  resetStateAddMovie = (callback) => {
    callback(this.state);
    this.setState(initialState);
  }

  renderTitle = (title) => {
    const item = (
      <label htmlFor="title-input-label" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
    return item;
  }

  renderSubtitle = (subtitle) => {
    const item = (
      <label htmlFor="subtitle-irnput-label" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
    return item;
  }

  renderImage = (imagePath) => {
    const item = (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
    return item;
  }

  renderSinopse = (storyline) => {
    const item = (
      <label htmlFor="storyline-input-label" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
    return item;
  }

  renderRating = (rating) => {
    const item = (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
    return item;
  }

  renderGenre = (genre) => {
    const item = (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
    return item;
  }

  renderButton = (onClick) => {
    const item = (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.resetStateAddMovie(onClick) }
      >
        Adicionar filme
      </button>
    );
    return item;
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle(title) }
        { this.renderSubtitle(subtitle) }
        { this.renderImage(imagePath) }
        { this.renderSinopse(storyline) }
        { this.renderRating(rating) }
        { this.renderGenre(genre) }
        { this.renderButton(onClick) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
