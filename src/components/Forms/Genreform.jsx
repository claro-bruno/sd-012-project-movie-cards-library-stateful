import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreForm extends Component {
  render() {
    const { genreValue, genreOnChange } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          type="select"
          value={ genreValue }
          data-testid="genre-input"
          onChange={ genreOnChange }
          name="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreForm.propTypes = {
  genreOnChange: PropTypes.string.isRequired,
  genreValue: PropTypes.number.isRequired,
};

export default GenreForm;
