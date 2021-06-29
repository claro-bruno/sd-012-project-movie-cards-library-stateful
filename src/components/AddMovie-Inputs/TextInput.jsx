import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { valorInicial,
      valorAlterado,
      dataTestidLabel,
      dataTestid,
      labelTitle,
      nome,
      tipo,
      id,
      check } = this.props;
    return (
      <section>
        <label data-testid={ dataTestidLabel } htmlFor={ id }>
          { labelTitle }
          <input
            name={ nome }
            id={ id }
            data-testid={ dataTestid }
            value={ valorInicial }
            onChange={ valorAlterado }
            type={ tipo }
            checked={ check }
          />
        </label>
      </section>
    );
  }
}

TextInput.propTypes = {
  valorInicial: PropTypes.string.isRequired,
  valorAlterado: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
  dataTestidLabel: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired,
};

export default TextInput;
