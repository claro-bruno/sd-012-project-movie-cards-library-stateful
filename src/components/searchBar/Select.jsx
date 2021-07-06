import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label
        htmlFor="select-input"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          value={ value }
          onChange={ onChange }
          data-testid="select-input"
        >
          <option
            value=""
            data-testid="select-option"
          >
            Todos
          </option>
          <option
            value="action"
            data-testid="select-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid="select-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid="select-option"
          >
            Suspense
          </option>

        </select>
      </label>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
