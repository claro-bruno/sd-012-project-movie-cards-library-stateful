import React from 'react';

class TextInput extends React.Component {
  render() {
    const { valorInicial, valorAlterado, dataTestidLabel, dataTestid, labelTitle, nome, tipo } = this.props;
    return (
      <section>
        <label data-testid={ dataTestidLabel }>
         { labelTitle }
          <input name={ nome } data-testid={ dataTestid } value={ valorInicial } onChange={ valorAlterado } type={ tipo } />
        </label>
      </section>
    );
  }
}

export default TextInput;