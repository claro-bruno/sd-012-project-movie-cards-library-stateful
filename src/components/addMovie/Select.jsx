import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label
        htmlFor="genre-input"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;

Select.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
