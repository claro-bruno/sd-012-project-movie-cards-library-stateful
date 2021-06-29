import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            defaultValue={ genre }
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">
              Ação
            </option>
            <option
              data-testid="genre-option"
              value="comedy"
              onChange={ handleChange }
            >
              Comédia
            </option>
            <option
              data-testid="genre-option"
              value="thriller"
              onChange={ handleChange }
            >
              Suspense
            </option>
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
