import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputImagem extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="image__path" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            id="image__path"
            type="text"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }
}
InputImagem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputImagem;
