import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  render() {
    const {
      label,
      labelTestId,
      value,
      onChange,
      labelId,
      selectTestId,
      optionTestId,
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
            id={ labelId }
          >
            <option data-testid={ optionTestId } value="action">Ação</option>
            <option data-testid={ optionTestId } value="comedy">Comédia</option>
            <option data-testid={ optionTestId } value="thriller">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

SelectGenre.propTypes = {
  label: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelId: PropTypes.string.isRequired,
  selectTestId: PropTypes.string.isRequired,
  optionTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectGenre;
