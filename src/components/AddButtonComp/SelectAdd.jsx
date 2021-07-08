import React from 'react';
import PropTypes from 'prop-types';

class SelectAdd extends React.Component {
  render() {
    const { genre, handleChange2 } = this.props;
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre"
      >
        Gênero
        <select
          id={ genre }
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ handleChange2 }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectAdd.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange2: PropTypes.func.isRequired,
};

export default SelectAdd;
