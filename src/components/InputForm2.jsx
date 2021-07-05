import React from 'react';
import PropTypes from 'prop-types';

class InputsForm2 extends React.Component {
  render() {
    const {
      storyline,
      rating,
      genre,
      handleChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="textareaInput" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="textareaInput"
            value={ storyline }
            onChange={ handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="ratingInput" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="ratingInput"
            value={ rating }
            onChange={ handleChange }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genreInput" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genreInput"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

InputsForm2.propTypes = {
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.string,
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

InputsForm2.defaultProps = {
  rating: 'undefined',
};

export default InputsForm2;
