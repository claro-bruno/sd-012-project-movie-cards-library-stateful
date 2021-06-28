import PropTypes from 'prop-types';

import React from 'react';

class Genre extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Gênero" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="Gênero"
          onChange={ handleChange }
          value={ value }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Genre;
