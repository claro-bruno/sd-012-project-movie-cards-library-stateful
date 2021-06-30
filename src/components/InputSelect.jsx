import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="select-genre-add" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="select-genre-add"
            value={ genre }
            onChange={ handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

InputSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSelect;
