import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

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

  // Referência: Natalia Souza - tuma 11.
  // Repositório consultado: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/147/files
  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            type="text"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            htmlFor="genre-option"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};
