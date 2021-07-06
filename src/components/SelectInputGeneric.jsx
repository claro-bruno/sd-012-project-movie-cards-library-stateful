import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInputGeneric extends Component {
  render() {
    const { valueSelectInput, handleChangeSelect } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ valueSelectInput }
          data-testid="genre-input"
          onChange={ handleChangeSelect }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectInputGeneric.propTypes = {
  valueSelectInput: PropTypes.string.isRequired,
  handleChangeSelect: PropTypes.func.isRequired,
};

export default SelectInputGeneric;
