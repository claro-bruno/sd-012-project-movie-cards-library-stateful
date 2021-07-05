// vai usar state
import React from 'react';
/* import PropTypes from 'prop-types'; */

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  // criando as funçoes que renderizam o titulo, subtitulo etc, pois causava probelma com eslint por ser muito grande no render
  // funções copiadas do github do Bruno Yamamoto https://github.com/tryber/sd-012-project-movie-cards-library-stateful/pull/47

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

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    /* const { onClick } = this.props; */

    return (
      <form data-testid="add-movie-form">
        { this.renderTitle(title) }
        { this.renderSubtitle(subtitle) }
        { this.renderImage(imagePath) }
        { this.renderSinopse(storyline) }
        { this.renderRating(rating) }
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

export default AddMovie;
