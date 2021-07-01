import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSelect extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="inputSelect" data-testid="genre-input-label">
        Gênero:
        <select
          id="inputSelect"
          data-testid="genre-input"
          name="genre"
          value={ value }
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

InputSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSelect;
