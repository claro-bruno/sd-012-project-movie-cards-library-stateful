import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.translate = this.translate.bind(this);
  }

  translate(name) {
    const dictionary = {
      title: 'Título:',
      subtitle: 'Subtítulo:',
      image: 'Imagem',
      storyline: 'Sinopse:',
      rating: 'Avaliação:',
    };
    const translation = name.replace(/.*/i, dictionary[name]);
    return translation;
  }

  render() {
    const { type, value, onChange, name } = this.props;
    const newName = (name === 'imagePath') ? 'image' : name;
    return (
      <label
        htmlFor={ `${newName}-input` }
        data-testid={ `${newName}-input-label` }
      >
        { this.translate(newName) }
        <input
          type={ type }
          value={ value }
          onChange={ onChange }
          name={ name }
          data-testid={ `${newName}-input` }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}.isRequired;

export default FormInput;
