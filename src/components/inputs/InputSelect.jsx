import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label className="my-1 mr-2" htmlFor="addGenre" data-testid="genre-input-label">
        Gênero
        <select
          id="addGenre"
          type="text"
          data-testid="genre-input"
          name="genre"
          value={ value }
          onChange={ handleChange }
          className="form-control"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSelect;
