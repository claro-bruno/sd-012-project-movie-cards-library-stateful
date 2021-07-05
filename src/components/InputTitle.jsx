import React from 'react';

class InputTitle extends React.Component {
  render() {
    return (
      <label htmlFor="input-title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          id="input-title"
          data-testid="title-input"
          value
          onChange
        />
      </label>);
  }
}

export default InputTitle;
