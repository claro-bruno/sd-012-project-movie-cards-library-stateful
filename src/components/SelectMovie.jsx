import React from 'react';
import PropTypes from 'prop-types';

class SelectMovie extends React.Component {
  render() {
    const { initValue, onChange } = this.props;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="label-genre"
      >
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          onChange={ onChange }
          value={ initValue }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectMovie.propTypes = {
  initValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectMovie;
