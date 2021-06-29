import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
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

    this.handleclick = this.handleclick.bind(this);
  }

  handleclick = () => {
    console.log(this.state);
  };

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input-label">
          Título
          <input data-testid="title-input" type="text" />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            defaultValue="0"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input-label">
          Gênero
          <select data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="submit" onClick={ onClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
