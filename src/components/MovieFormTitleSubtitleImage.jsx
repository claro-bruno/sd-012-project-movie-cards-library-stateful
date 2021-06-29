import React from 'react';
import PropTypes from 'prop-types';

class MovieFormTitleSubtitleImage extends React.Component {
  render() {
    const { title, subtitle, imagePath, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="title__input" data-testid="title-input-label">
          Título
          <input
            name="title"
            id="title__input"
            type="text"
            value={ title }
            onChange={ handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle__input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            id="title__input"
            type="text"
            value={ subtitle }
            onChange={ handleChange }
            data-testid="subtitle-input"
          />
        </label>
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

MovieFormTitleSubtitleImage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MovieFormTitleSubtitleImage;
