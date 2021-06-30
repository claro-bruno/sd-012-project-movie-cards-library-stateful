import React from 'react';
import PropTypes from 'prop-types';

class ImportGenre extends React.Component {
  render() {
    const { handleChange, importGenre } = this.props;
    return (
      <label htmlFor="importGenre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="importGenre"
          value={ importGenre }
          id="importGenre"
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

ImportGenre.propTypes = {
  handleChange: PropTypes.func.isRequired,
  importGenre: PropTypes.string.isRequired,
};

export default ImportGenre;
