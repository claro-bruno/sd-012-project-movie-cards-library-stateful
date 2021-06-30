import React from 'react';
import PropTypes from 'prop-types';

class InputsAddMovie extends React.Component {
  render() {
    const { title, subtitle, imagePath, rating, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="input-titulo" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ title }
            onChange={ handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="input-Subtitulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="input-imagem" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={ imagePath }
            onChange={ handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="input-rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            onChange={ handleChange }
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }
}

InputsAddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputsAddMovie;
