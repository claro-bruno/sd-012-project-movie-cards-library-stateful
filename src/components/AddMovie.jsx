// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input id="title-input" data-testid="title-input" />
        <input
          name="title"
          type="text"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input id="subtitle-input" data-testid="subtitle-input" />
        <input
          name="subtitle"
          type="text"
          id="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input id="image-input" data-testid="image-input" />
        <input
          name="imagePath"
          type="text"
          id="image-input"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSinopse() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input id="storyline-input" data-testid="storyline-input" />
        <input
          name="storyline"
          type="text"
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderAvaliador() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input id="rating-input" data-testid="rating-input" />
        <input
          name="rating"
          type="number"
          id="rating-input"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenero() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          type="number"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <h2>Adiciona Filme</h2>
        <form data-testid="add-movie-form">
          { this.renderTitle() }
          { this.renderSubtitle() }
          { this.renderImage() }
          { this.renderSinopse() }
          { this.renderAvaliador() }
          { this.renderGenero() }
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
