import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.translate = this.translate.bind(this);
  }

  translate(name) {
    const dictionary = {
      genre: 'Gênero:',
      selectedGenre: 'Filtrar por gênero',
      action: 'Ação',
      comedy: 'Comédia',
      thriller: 'Suspense',
      '': 'Todos',
    };
    return name.replace(/.*/i, dictionary[name]);
  }

  render() {
    const { value, onChange, name, options } = this.props;
    const newName = (name === 'selectedGenre') ? 'select' : name;
    return (
      <label
        htmlFor={ `${newName}-input` }
        data-testid={ `${newName}-input-label` }
      >
        { this.translate(name) }
        <select
          value={ value }
          onChange={ onChange }
          name={ name }
          data-testid={ `${newName}-input` }
        >
          {options.map((option) => (
            <option
              value={ option }
              data-testid={ `${newName}-option` }
              key={ option }
            >
              { this.translate(option) }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}.isRequired;

export default FormSelect;
