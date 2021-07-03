import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddImg extends Component {
  render() {
    const { imagePath, handleChange } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

AddImg.propTypes = {
  imagePath: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default AddImg;
