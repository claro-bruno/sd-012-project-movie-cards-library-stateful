import React from 'react';
import PropTypes from 'prop-types';

class CaminhoImagem extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Imagem" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ value }
          name="imagePath"
          onChange={ handleChange }
          id="Imagem"
          data-testid="image-input"
        />
      </label>
    );
  }
}

CaminhoImagem.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CaminhoImagem;
