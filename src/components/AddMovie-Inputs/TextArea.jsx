import React from 'react';

class TextArea extends React.Component {
  render() {
    const { valorInicial, valorAlterado, dataTestidLabel, dataTestid, labelTitle, nome } = this.props;
    return (
      <label data-testid={ dataTestidLabel }>
        { labelTitle }
        <textarea data-testid={ dataTestid } value={ valorInicial } onChange={ valorAlterado } name={ nome } />
      </label>
    );
  }
}

export default TextArea;