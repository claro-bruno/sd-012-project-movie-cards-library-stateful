import React from 'react';

class ImagePath extends React.Component {
  render() {
    return (
      <label data-testid="image-input-label" htmlFor="search" className="col-12">
        Imagem
        <input
          className="form-control"
          type="text"
          placeholder="Insira uma imagem"
          data-testid="image-input"
        />
      </label>
    );
  }
}

export default ImagePath;
