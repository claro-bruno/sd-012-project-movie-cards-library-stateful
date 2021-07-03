import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: name === 'rating' ? Number(value) : value,
    });
  };

  handleClick = (callback) => {
    callback(this.state);
    this.setState(INITIAL_STATE);
  }

  renderHelper = (title, subtitle, imagePath, storyline) => (
    <div>
      <h5> Novo Filme</h5>
      <label htmlFor="input-titulo" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="input-titulo"
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="input-subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="input-imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="input-imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="input-textarea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          cols="23"
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
    // rating = Number(rating);
    return (
      <form data-testid="add-movie-form" className="add-form-container">
        {this.renderHelper(title, subtitle, imagePath, storyline)}
        <label htmlFor="input-rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            id="input-rating"
            type="number"
            min="0"
            max="5"
            value={ rating }
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
          type="button"
          data-testid="send-button"
          onClick={ () => this.handleClick(onClick) }
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
