import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

class Select extends React.Component {
  render() {
    const { valorInicial,
      valorAlterado,
      dataTestidOption,
      dataTestidLabel,
      dataTestid,
      labelTitle,
      nome,
      optionValue,
      array,
      id } = this.props;
    return (
      <label data-testid={ dataTestidLabel } htmlFor={ id }>
        { labelTitle }
        <select
          data-testid={ dataTestid }
          name={ nome }
          onChange={ valorAlterado }
          value={ valorInicial }
          id={ id }
        >
          <Option
            optionValue={ optionValue }
            array={ array }
            dataTestidOption={ dataTestidOption }
          />
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  optionValue: PropTypes.string.isRequired,
  dataTestidOption: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  dataTestidLabel: PropTypes.string.isRequired,
  valorInicial: PropTypes.string.isRequired,
  valorAlterado: PropTypes.func.isRequired,
};

export default Select;
