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
          value={ value }
          onChange={ onChange }
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
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
