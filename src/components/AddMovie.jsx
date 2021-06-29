import React, { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
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
    this.state = INITIAL_STATE;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = () => {
    // e.preventDefault();
    const { onClick } = this.props;
    onClick();
    this.setState(INITIAL_STATE);
  }

  renderHelper = (title, subtitle, imagePath, storyline) => (
    <div>
      <label htmlFor="input-titulo" data-testid="title-input-label">
        Título
        <input
          id="input-titulo"
          type="text"
          valor={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="input-subtitle"
          type="text"
          valor={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="input-imagePatch" data-testid="image-input-label">
        Imagem
        <input
          id="input-imagePatch"
          type="text"
          valor={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="input-textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="input-textarea"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    </div>
  );

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.renderHelper(title, subtitle, imagePath, storyline)}
        <label htmlFor="input-rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            id="input-rating"
            type="number"
            value={ Number(rating) }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-genre" data-testid="genre-input-label">
          Gênero
          <select
            id="input-genre"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ () => this.submitForm(onClick) }
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
