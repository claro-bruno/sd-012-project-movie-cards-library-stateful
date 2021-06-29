import React from 'react';
import propTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="Genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  handleChange: propTypes.func,
  value: propTypes.string,
};

Genre.defaultProps = {
  handleChange: () => {},
  value: '',
};

export default Genre;
