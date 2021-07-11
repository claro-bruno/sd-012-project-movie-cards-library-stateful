import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      name,
      testid,
      labelText,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    const labelid = `${testid}-label`;
    return (
      <label
        htmlFor={ name }
        data-testid={ labelid }
      >
        { labelText }
        <select
          name={ name }
          data-testid={ testid }
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
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
  name: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default Select;
