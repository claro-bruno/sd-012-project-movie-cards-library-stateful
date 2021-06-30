import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImagePath extends Component {
  render() {
    const {
      imagePath,
      handleChange } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputImagePath.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputImagePath;
