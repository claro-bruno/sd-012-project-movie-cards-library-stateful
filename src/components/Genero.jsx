import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="3" data-testid="genre-input-label">
        Gênero
        <select
          value={ value }
          onChange={ handleChange }
          data-testid="genre-input"
          id="3"
          name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genero.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Genero;
