import React from 'react';

class Select extends React.Component {
  render() {
    const { valorInicial, valorAlterado, dataTestidLabel, dataTestid, labelTitle, nome, optionValue } = this.props;
    return(
      <label data-testid={ dataTestidLabel }>
        { labelTitle }
        <select data-testid={ dataTestid } name={ nome } onChange={ valorAlterado } value={ valorInicial }>
          { Array.map((item) => <option value={ optionValue }>{ item }</option>)}
        </select>
      </label>
    );
  }
}

export default Select;