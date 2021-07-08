import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange2 } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          name="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChange2 }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange2: PropTypes.func.isRequired,
};

export default ImagePath;
