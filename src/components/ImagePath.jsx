import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class ImagePath extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <Input
        labelTestId="image-input-label"
        labelText="Imagem"
        inputTestId="image-input"
        value={ imagePath }
        onChange={ onChange }
        name="imagePath"
      />
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default ImagePath;
