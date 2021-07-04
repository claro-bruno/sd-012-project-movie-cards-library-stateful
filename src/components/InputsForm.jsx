import React from 'react';
import PropTypes from 'prop-types';

class InputsForm1 extends React.Component {
  render() {
    const {
      title,
      subtitle,
      imagePath,
      handleChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="titleInput"
            value={ title }
            onChange={ handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitleInput"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="imageInput" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="imageInput"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }
}

InputsForm1.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputsForm1;
