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

    this.handleTitleChange = this.handleTitleChange.bind(this);

    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);

    this.handleImageChange = this.handleImageChange.bind(this);

    this.handleStorylineChange = this.handleStorylineChange.bind(this);

    this.handleRatingChange = this.handleRatingChange.bind(this);

    this.handleGenreChange = this.handleGenreChange.bind(this);

    this.resetState = this.resetState.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubtitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleImageChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleStorylineChange(event) {
    this.setState({ storyline: event.target.value });
  }

  handleRatingChange(event) {
    this.setState({ rating: event.target.value });
  }

  handleGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  resetState() {
    this.setState = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    console.log(this.state);
  }

  renderTitle(title) {
    return (
      <label
        htmlFor="title"
        name="title"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleTitleChange }
          // onChange={ ({ target }) => this.handleTitleChange({ name, value }) }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitle(subTitle) {
    return (
      <label
        htmlFor="subtitle"
        name="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subTitle }
          onChange={ this.handleSubtitleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImagePath(imagePath) {
    return (
      <label
        htmlFor="imagePath"
        name="imagePath"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleImageChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  renderStoryline(storyline) {
    return (
      <label
        htmlFor="storyline"
        name="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          cols="30"
          rows="10"
          onChange={ this.handleStorylineChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderRating(rating) {
    return (
      <label
        htmlFor="rating"
        name="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleRatingChange }
          data-testid="rating-input"
        />
      </label>
    );
  }

  renderGenre(genre) {
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.handleGenreChange }
          data-testid="genre-input"
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
      title, subTitle, imagePath, storyline, rating, genre,
    } = this.state;
    const { onClick: clickProps } = this.props;
    return (
      <form
        onSubmit={ this.resetState }
        data-testid="add-movie-form"
      >
        { this.renderTitle(title) }
        { this.renderSubtitle(subTitle) }
        { this.renderImagePath(imagePath) }
        { this.renderStoryline(storyline) }
        { this.renderRating(rating) }
        { this.renderGenre(genre) }

        <button
          type="button"
          onClick={ () => {
            clickProps(this.state);
            this.resetState();
          } }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
