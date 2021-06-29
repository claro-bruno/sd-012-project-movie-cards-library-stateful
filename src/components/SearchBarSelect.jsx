import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBarSelect extends Component {
  render() {
    const { id, label, callback, value } = this.props;

    return (
      <div>
        <label
          className="form-label"
          data-testid={ `${id}-input-label` }
          htmlFor={ `${id}-input` }
        >
          { label }
        </label>
        <select
          className="form-select form-control"
          data-testid="select-input"
          value={ value }
          onChange={ callback }
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </div>
    );
  }
}

SearchBarSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBarSelect;
