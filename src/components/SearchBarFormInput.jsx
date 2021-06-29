import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.translate = this.translate.bind(this);
  }

  translate(name) {
    const dictionary = {
      searchText: 'Inclui o texto:',
      bookmarkedOnly: 'Mostrar somente favoritos',
    };
    const translation = name.replace(/.*/i, dictionary[name]);
    return translation;
  }

  render() {
    const { type, value, onChange, name, checked } = this.props;
    return (
      <label htmlFor={ `${type}-input ` } data-testid={ `${type}-input-label` }>
        {this.translate(name)}
        <input
          type={ type }
          value={ value }
          checked={ checked }
          onChange={ onChange }
          name={ name }
          data-testid={ `${type}-input` }
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
