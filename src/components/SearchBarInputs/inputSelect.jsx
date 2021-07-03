import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { selectValue, onSelect } = this.props;
    return (
      <label htmlFor="inputSelect" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="inputSelect"
          data-testid="select-input"
          name="selectedGenre"
          value={ selectValue }
          onChange={ onSelect }
        >
          <option value="" data-testid="select-option">
            Todos
          </option>
          <option value="action" data-testid="select-option">
            Ação
          </option>
          <option value="comedy" data-testid="select-option">
            Comédia
          </option>
          <option value="thriller" data-testid="select-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  selectValue: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default InputSelect;
