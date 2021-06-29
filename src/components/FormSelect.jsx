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
      subtitle: 'Subtítulo:',
      image: 'Imagem',
      storyline: 'Sinopse:',
      rating: 'Avaliação:',
    };
    return name.replace(/.*/i, dictionary[name]);
  }

  render() {
    const { value, onChange, name } = this.props;
    return (
      <label
        htmlFor={ `${name}-input` }
        data-testid={ `${name}-input-label` }
      >
        { this.translate(name) }
        <select
          value={ value }
          onChange={ onChange }
          name={ name }
          data-testid={ `${name}-input` }
        >
          <option value="action" data-testid={ `${name}-option` }>Ação</option>
          <option value="comedy" data-testid={ `${name}-option` }>Comédia</option>
          <option value="thriller" data-testid={ `${name}-option` }>Suspense</option>
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
