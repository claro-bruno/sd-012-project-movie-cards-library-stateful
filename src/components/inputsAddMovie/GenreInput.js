import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GenreInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="Gênero">
        Gênero
        <select
          name="genre"
          value={ value }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>

          <option data-testid="genre-option" value="comedy">Comédia</option>

          <option data-testid="genre-option" value="thriller">Suspense</option>

        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
