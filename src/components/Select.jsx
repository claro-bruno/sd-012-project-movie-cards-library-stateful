import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { label, labelTestId, value, onChange, labelId, selectTestId } = this.props;
    return (
      <section>
        <label data-testid={ labelTestId } htmlFor={ labelId }>
          { label }
          <select
            value={ value }
            onChange={ onChange }
            data-testid={ selectTestId }
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelId: PropTypes.string.isRequired,
  selectTestId: PropTypes.string.isRequired,
};

export default Select;
