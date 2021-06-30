import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre-input"
      >
        Gênero
        <select
          data-testid="genre-input"
          value={ value }
          onChange={ handleChange }
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
Genre.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Genre;
