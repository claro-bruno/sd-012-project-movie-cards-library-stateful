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

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  // Dividi em funções devido à dica da colega Adriana Biberg.

  createTitleInput() {
    return (
      <label htmlFor="add-title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          id="add-title"
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>);
  }

  createSubtitleInput() {
    return (
      <label htmlFor="add-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="add-subtitle"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>);
  }

  createImageInput() {
    return (
      <label htmlFor="add-image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="add-image"
          data-testid="image-input"
          name="imagePath"
          onChange={ this.handleChange }
        />
      </label>);
  }

  createStorylineInput() {
    return (
      <label htmlFor="add-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="add-storyline"
          data-testid="storyline-input"
          name="storyline"
          onChange={ this.handleChange }
        />
      </label>);
  }

  createRatingInput() {
    return (
      <label htmlFor="add-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="add-rating"
          data-testid="rating-input"
          defaultValue={ 0 }
          name="rating"
          onChange={ this.handleChange }
        />
      </label>);
  }

  createGenreInput() {
    return (
      <label htmlFor="add-genre" data-testid="genre-input-label">
        Gênero
        <select
          id="add-genre"
          defaultValue="Ação"
          data-testid="genre-input"
          name="genre"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { onClick() }
        { this.createTitleInput() }
        { this.createSubtitleInput() }
        { this.createImageInput() }
        { this.createStorylineInput() }
        { this.createRatingInput() }
        { this.createGenreInput() }
        {console.log(this.state)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
