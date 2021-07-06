import React from 'react';
import PropTypes from 'prop-types';

class InputSelectGen extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-select-gen" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="input-select-gen"
          value={ value }
          onChange={ onChange }
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

InputSelectGen.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSelectGen;
