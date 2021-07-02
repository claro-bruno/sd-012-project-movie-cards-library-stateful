import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class MovieInfos extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleChange } = this.props;

    return (
      <>
        <Input
          label="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ handleChange }
          labelId="title-input-label"
          inputId="title-input"
        />
        <Input
          label="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
          labelId="subtitle-input-label"
          inputId="subtitle-input"
        />
        <Input
          label="Imagem"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          labelId="image-input-label"
          inputId="image-input"
        />
        <Input
          label="Sinopse"
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
          labelId="storyline-input-label"
          inputId="storyline-input"
        />
      </>
    );
  }
}

MovieInfos.propTypes = PropTypes.exact({
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
}).isRequired;

export default MovieInfos;
