import React from 'react';
import { string, func } from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, changeTextHandle } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="search" className="col-12">
        Imagem
        <input
          className="form-control"
          type="text"
          placeholder="Insira uma imagem"
          data-testid="image-input"
          onChange={ changeTextHandle }
          value={ imagePath }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: string.isRequired,
  changeTextHandle: func.isRequired,
};

export default ImagePath;
