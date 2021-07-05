import React from 'react';

class InputSubtitle extends React.Component {
  render() {
    return (
      <label htmlFor="input-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          id="input-subtitle"
          data-testid="subtitle-input"
          value
          onChange
        />
      </label>);
  }
}

export default InputSubtitle;
