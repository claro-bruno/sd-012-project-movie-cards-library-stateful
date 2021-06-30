import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';

class MoviesData extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, onChange } = this.props;

    return (
      <>
        <Input
          label="Título"
          type="text"
          name="title"
          value={ title }
          dataTestId="title-input"
          onChange={ onChange }
        />

        <Input
          label="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          dataTestId="subtitle-input"
          onChange={ onChange }
        />

        <Input
          label="Imagem"
          type="text"
          name="imagePath"
          value={ imagePath }
          dataTestId="image-input"
          onChange={ onChange }
        />

        <TextArea
          label="Sinopse"
          name="storyline"
          value={ storyline }
          dataTestId="storyline-input"
          onChange={ onChange }
        />
      </>
    );
  }
}

MoviesData.propTypes = PropTypes.exact({
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}).isRequired;

export default MoviesData;
