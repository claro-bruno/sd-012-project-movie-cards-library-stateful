import React from 'react';

class TextArea extends React.Component {
  render() {
    const { name, value, onChange } = this.props;

    return (
      <label htmlFor="add-storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="add-storyline"
          data-testid="storyline-input"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default TextArea;
