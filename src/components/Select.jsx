import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <label htmlFor="input-select" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-select"
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
          name={ name }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  value: undefined,
};

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
