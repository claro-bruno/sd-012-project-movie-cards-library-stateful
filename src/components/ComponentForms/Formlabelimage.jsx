import React from 'react';

class Formlabelimage extends React.Component {
  render() {
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          id="image"
          data-testid="image-input"
          type="text"
          name="imagePath"
          onChange={ this.handlechenge }
        />
      </label>
    );
  }
}

export default Formlabelimage;
