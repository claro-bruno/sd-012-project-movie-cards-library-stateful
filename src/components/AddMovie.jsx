import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';

export default class AddMovie extends Component {
  render() {
    const { title, subtitle, imagePath } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } />
        <InputSubtitle value={ subtitle } />
        <InputImage value={ imagePath } />
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
        <button data-testid="send-button" type="submit" onClick={ this.onClickButton }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};
