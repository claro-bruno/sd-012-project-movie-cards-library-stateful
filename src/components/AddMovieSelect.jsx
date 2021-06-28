import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSelect extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        <select
          name="genre"
          id="genre-input"
          data-testid="genre-input"
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

AddMovieSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default AddMovieSelect;
