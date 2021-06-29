import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';

class MovieInfo extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, onChange } = this.props;
    return (
      <div>
        <Input
          inputId="title"
          inputName="title"
          testIdInput="title-input"
          testIdLabel="title-input-label"
          typeInput="text"
          value={ title }
          onChange={ onChange }
          labelText="Título"
        />
        <Input
          inputId="subtitle"
          inputName="subtitle"
          testIdInput="subtitle-input"
          testIdLabel="subtitle-input-label"
          typeInput="text"
          value={ subtitle }
          onChange={ onChange }
          labelText="Subtítulo"
        />
        <Input
          inputId="imagePath"
          inputName="imagePath"
          testIdInput="image-input"
          testIdLabel="image-input-label"
          typeInput="text"
          value={ imagePath }
          onChange={ onChange }
          labelText="Imagem"
        />
        <Textarea
          textareaId="storyline"
          textareaName="storyline"
          testIdTextarea="storyline-input"
          testIdLabel="storyline-input-label"
          value={ storyline }
          onChange={ onChange }
          labelText="Sinopse"
        />
      </div>
    );
  }
}

MovieInfo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  onChange: PropTypes.func,
};

MovieInfo.defaultProps = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  onChange: console.log,
};

export default MovieInfo;
