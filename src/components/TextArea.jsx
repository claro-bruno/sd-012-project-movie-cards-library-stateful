import React from 'react';

class TextArea extends React.Component {
  render() {
    return (
      <label htmlFor="input-sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="input-sinopse"
          data-testid="storyline-input"
          value=""
          onChange=""
        />
      </label>
    );
  }
}
export default TextArea;
