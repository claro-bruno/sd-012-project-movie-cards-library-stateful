import React from 'react';
import PropTypes from 'prop-types';

class SearchBarInput extends React.Component {
  render() {
    const { labelId, inputId, texto, tipo, nome, valor, checked, func } = this.props;
    return (
      <label data-testid={ labelId } htmlFor={ inputId }>
        { texto }
        <input
          data-testid={ inputId }
          type={ tipo }
          name={ nome }
          value={ valor }
          checked={ checked }
          onChange={ func }
        />
      </label>
    );
  }
}

SearchBarInput.propTypes = ({
  labelId: PropTypes.string,
  inputId: PropTypes.string,
  texto: PropTypes.string,
  tipo: PropTypes.string,
  valor: PropTypes.string,
  checked: PropTypes.bool,
  func: PropTypes.func,
}).isRequired;

export default SearchBarInput;
