import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.reset = this.reset.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  reset(event) {
    const { onClick } = this.props;
    onClick(event);

    const initialValues = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    return initialValues;
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          name="title"
          data-testid="title-input"
          id="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
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
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          id="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStoryline() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="textarea-input">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          id="textarea-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="number-input">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          id="number-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          id="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    // const { onClick } = this.props;
    return (
      <button data-testid="send-button" type="submit" onClick={ this.reset }>
        Adicionar filme
      </button>

    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImage() }
        { this.renderStoryline() }
        { this.renderRating() }
        { this.renderGenre() }
        { this.renderButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
