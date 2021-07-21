import React, { Component } from 'react';
import PropType from 'prop-types';

class DadosFinais extends Component {
  render() {
    const {
      storyline,
      rating,
      genre,
      onChange } = this.props;
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ onChange }
            name="storyline"
            id="storyline"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ onChange }
            name="rating"
            id="rating"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            type="option"
            value={ genre }
            data-testid="genre-input"
            onChange={ onChange }
            name="genre"
            id="genre"
          >
            {/* https://www.w3schools.com/tags/tag_option.asp */}
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

DadosFinais.propTypes = {
  storyline: PropType.string.isRequired,
  rating: PropType.number.isRequired,
  genre: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default DadosFinais;
