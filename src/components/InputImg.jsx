import React from 'react';

class InputImg extends React.Component {
  render() {
    return (
      <label htmlFor="input-img" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="input-img"
          data-testid="image-input"
          value=""
          onChange=""
        />
      </label>
    );
  }
}
export default InputImg;
