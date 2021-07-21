import React, { Component } from 'react';
import PropType from 'prop-types';

class DadosIniciais extends Component {
  render() {
    const {
      title,
      subtitle,
      imagePath,
      onChange } = this.props;
    return (
      <div>
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ onChange }
            name="title"
            id="titleInput"
          />
        </label>
        <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ onChange }
            name="subtitle"
            id="subtitleInput"
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ onChange }
            name="imagePath"
            id="imagePath"
          />
        </label>
      </div>
    );
  }
}

DadosIniciais.propTypes = {
  title: PropType.string.isRequired,
  subtitle: PropType.string.isRequired,
  imagePath: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default DadosIniciais;
