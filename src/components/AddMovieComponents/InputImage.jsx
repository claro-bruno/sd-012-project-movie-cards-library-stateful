import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../generics/Input';

class InputImage extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <Input
        id="add-image"
        dataTestidLabel="image-input-label"
        dataTestidInput="image-input"
        textLabel="Imagem"
        name="imagePath"
        onChange={ onChange }
        value={ value }
      />
    );
  }
}

InputImage.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputImage;
