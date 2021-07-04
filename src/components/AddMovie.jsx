import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Consultei o repositório do Wendell Costa para resolver essa parte.
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/174/commits/44b731c7cb8c4d936475d54de1125e003e202a80
 */

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({ ...initialState });
  }

  Title() {
    const { title } = this.state;
    return (
      <label
        data-testid="title-input-label"
        htmlFor="title-input"
      >
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  Subtitle() {
    const { subtitle } = this.state;
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle-input"
      >
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ImagePath() {
    const { imagePath } = this.state;
    return (
      <label
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  Storyline() {
    const { storyline } = this.state;
    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        >
          { storyline }
        </textarea>
      </label>
    );
  }

  addRating() {
    const { rating } = this.state;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          value={ rating }
          type="number"
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  Genre() {
    const { genre } = this.state;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre-input"
      >
        Gênero
        <select
          name="genre"
          id="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option" defaultValue>Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  ButtonAdd() {
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ this.handleClick }
        value="Adicionar filme"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          { this.Title() }
          { this.Subtitle() }
          { this.ImagePath() }
          { this.Storyline() }
          { this.addRating() }
          { this.Genre() }
          { this.ButtonAdd() }
        </form>
      </>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default AddMovie;
