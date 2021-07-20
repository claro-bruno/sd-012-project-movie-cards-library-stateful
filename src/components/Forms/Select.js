import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { inputsValue, inputLabel, onChangeSelect } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        { inputLabel }
        <select
          value={ inputsValue }
          name="genre"
          data-testid="genre-input"
          onChange={ onChangeSelect }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = PropTypes.exact({
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
}).isRequired;

export default Select;
