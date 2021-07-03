import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddGenre extends Component {
  render() {
    const { genre, handleChange } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddGenre.propTypes = {
  genre: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default AddGenre;
