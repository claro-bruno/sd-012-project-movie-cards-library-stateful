import React from 'react';

class TextInput extends React.Component {
  render() {
    const { valorInicial, valorAlterado, dataTestidLabel, dataTestid, labelTitle, nome, tipo, id, check } = this.props;
    return (
      <section>
        <label data-testid={ dataTestidLabel } htmlFor={ id }>
         { labelTitle }
          <input name={ nome } id={ id } data-testid={ dataTestid } value={ valorInicial } onChange={ valorAlterado } type={ tipo } checked={ check } />
        </label>
      </section>
    );
  }
}

export default TextInput;