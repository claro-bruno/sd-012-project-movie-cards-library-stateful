import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { handleChange, genre } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          id="genre"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  handleChange: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default Genre;
