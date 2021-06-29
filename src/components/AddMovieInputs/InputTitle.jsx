import React from 'react';

class InputTitle extends React.Component {
  render() {
    return (
      <label htmlFor="inputTitle" data-testid="title-input-label">
        Título:
        <input type="text" id="inputTitle" data-testid="title-input" />
      </label>
    );
  }
}
export default InputTitle;
