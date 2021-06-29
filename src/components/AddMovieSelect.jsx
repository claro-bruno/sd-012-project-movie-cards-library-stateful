import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
class AddMovieSelect extends React.Component {
  render() {
    const label = 'Gênero';
    const id = 'genre-input';
    const name = 'genre';
    const labelId = '-label';
    const doubleDot = ':';
    const { value, onChange } = this.props;
    return (
      <label htmlFor={ id } data-testid={ id + labelId }>
        { label + doubleDot }
        <select data-testid={ id } name={ name } value={ value } onChange={ onChange }>
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

AddMovieSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieSelect;
