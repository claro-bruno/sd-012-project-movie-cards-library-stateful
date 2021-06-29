import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './myComponents/Input';

const inicioDoState = {
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

    this.state = inicioDoState;
    this.handleChange = this.handleChange.bind(this);
    this.resetInputs = this.resetInputs.bind(this);

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

  // Consulta repositorio da marcela silva

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

  // Ajuda da Le passando o input dentro da função

  titleInput(title) {
    return (
      // <label htmlFor="titleInput" data-testid="title-input-label">
      <Input
        labelText="Título"
        type="text"
        name="title"
        id="titleInput"
        dataTestIdLabel="title-input-label"
        value={ title }
        handleChange={ this.handleChange }
        dataTestIdImput="title-input"
      />
      // </label>
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
          onChange={ this.handleChange }
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
          onChange={ this.handleChange }
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
          onChange={ this.handleChange }
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
          onChange={ this.handleChange }
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
          onChange={ this.handleChange }
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
    this.setState(() => inicioDoState);
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

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

export default AddMovie;
