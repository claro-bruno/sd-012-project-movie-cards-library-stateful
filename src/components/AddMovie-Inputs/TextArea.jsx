import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { valorInicial,
      valorAlterado,
      dataTestidLabel,
      dataTestid,
      labelTitle,
      nome,
      id } = this.props;
    return (
      <label data-testid={ dataTestidLabel } htmlFor={ id }>
        { labelTitle }
        <textarea
          data-testid={ dataTestid }
          id={ id }
          value={ valorInicial }
          onChange={ valorAlterado }
          name={ nome }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  valorInicial: PropTypes.string.isRequired,
  valorAlterado: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
  dataTestidLabel: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default TextArea;
