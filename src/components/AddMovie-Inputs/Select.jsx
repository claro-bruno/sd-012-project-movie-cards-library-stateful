import React from 'react';

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
    return(
      <label data-testid={ dataTestidLabel } htmlFor={ id }>
        { labelTitle }
        <select data-testid={ dataTestid } name={ nome } onChange={ valorAlterado } value={ valorInicial } id={ id }>
          { array.map((item, index) => <option data-testid={ dataTestidOption } key={ index } value={ optionValue[index] }>{ item }</option>)}
        </select>
      </label>
    );
  }
}

export default Select;
