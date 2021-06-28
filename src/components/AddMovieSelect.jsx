import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
class AddMovieSelect extends React.Component {
  render() {
    const { label, name, value, onChange } = this.props;
    const labelId = '-label';
    const doubleDot = ':';
    const input = '-input';
    return (
      <label htmlFor={ name + input } data-testid={ name + input + labelId }>
        { label + doubleDot }
        <select name={ name } value={ value } onChange={ onChange }>
          <option data-testid={ name + input } value="">
            Todos
          </option>
          <option data-testid={ name + input } value="action">
            Ação
          </option>
          <option data-testid={ name + input } value="comedy">
            Comédia
          </option>
          <option data-testid={ name + input } value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

AddMovieSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieSelect;
