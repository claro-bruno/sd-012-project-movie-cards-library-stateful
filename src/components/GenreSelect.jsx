import React from 'react';
import PropTypes from 'prop-types';

class GenreSelect extends React.Component {
  render() {
    const { genre, hC } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ hC }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  hC: PropTypes.func.isRequired,
};

export default GenreSelect;
