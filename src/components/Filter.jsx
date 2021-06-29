import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const {
      label,
      labelTestId,
      value,
      onChange,
      labelId,
      selectTestId,
      name } = this.props;

    return (
      <section>
        <label data-testid={ labelTestId } htmlFor={ labelId }>
          { label }
          <select
            name={ name }
            value={ value }
            onChange={ onChange }
            data-testid={ selectTestId }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelId: PropTypes.string.isRequired,
  selectTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Filter;
