import React from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
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
    this.state = INITIAL_STATE;
    this.transferInput = this.transferInput.bind(this);
    this.incrementMovie = this.incrementMovie.bind(this);
  }

  transferInput({ target }) {
    const { name, value } = target;
    /*  const value = target.type === 'checkbox' ? target.checked : target.value; */
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  incrementMovie() {
    const { onClick } = this.props;
    /* const { importTitle, importSubtitle, importStoryline,
      imagePath, importGenre, importRating } = this.state;

    const newMovie = {
      title: importTitle,
      subtitle: importSubtitle,
      storyline: importStoryline,
      imagePath,
      genre: importGenre,
      rating: importRating,
    };

    onClick(newMovie); */
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  renderTitle(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.transferInput }
          id="title-input"
        />
      </label>
    );
  }

  renderSubTitle(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.transferInput }
          id="subtitle-input"
        />
      </label>
    );
  }

  renderImage(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.transferInput }
          id="image-input"
        />
      </label>
    );
  }

  renderStoryLine(storyline) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.transferInput }
          id="storyline-input"
        />
      </label>
    );
  }

  renderRating(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.transferInput }
          id="rating-input"
        />
      </label>
    );
  }

  renderGenre(genre) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.transferInput }
          id="genre-input"
        >
          {/* <option value="" data-testid="genre-option">Todos</option> */}
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>

    );
  }

  renderMovie() {
    return (
      <button type="button" data-testid="send-button" onClick={ this.incrementMovie }>
        Adicionar filme
      </button>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        { this.renderTitle(title)}
        { this.renderSubTitle(subtitle)}
        { this.renderImage(imagePath)}
        { this.renderStoryLine(storyline)}
        { this.renderRating(rating)}
        { this.renderGenre(genre)}
        { this.renderMovie()}
      </form>

    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  movies: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default AddMovie;
