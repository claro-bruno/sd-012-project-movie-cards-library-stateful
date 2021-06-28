import React from 'react';
import PropTypes from 'prop-types';

class GenreSelect extends React.Component {
  render() {
    const { handleSelect, valueSelected } = this.props;
    return (
      <p>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            onChange={ handleSelect }
            value={ valueSelected }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </p>
    );
  }
}

GenreSelect.propTypes = {
  valueSelected: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default GenreSelect;
