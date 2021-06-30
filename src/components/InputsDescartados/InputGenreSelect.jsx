import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGenre from './InputGenre';

// codigo feito com a ajuda da Le Bora e do meu irmao Eduardo Seije - turma 10 A!

class InputGenreSelect extends Component {
  render() {
    const { options, text, name, value, onChange } = this.props;
    const id = `${name}-input`;
    const dataTestId = id;
    const htmlFor = id;
    const dataTestLabelId = `${id}-label`;
    return (
      <label
        htmlFor={ htmlFor }
        data-testid={ dataTestLabelId }
      >
        { text }
        <select
          data-testid={ dataTestId }
          onChange={ onChange }
          id={ id }
          value={ value }
          name={ name }
        >
          {Object.entries(options).map(
            ([optValue, optText]) => (
              <InputGenre
                key={ optValue }
                text={ optText }
                value={ optValue }
                dataTestId={ `${name}-option` }
              />),
          )}
        </select>
      </label>
    );
  }
}

InputGenreSelect.propTypes = {
  options: PropTypes.shape({
    action: PropTypes.string,
    comedy: PropTypes.string,
    thriller: PropTypes.string,
  }),
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  dataTestId: PropTypes.string,
  dataTestLabelId: PropTypes.string,
}.isRequired;

export default InputGenreSelect;
