import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';

class AddMovieInfo extends React.Component {
  render() {
    const { title, subtitle, imagePath, handleChange, storyline } = this.props;
    return (
      <section>
        <Input
          id="title-input-id"
          dataTestIDLabel="title-input-label"
          labelContent="Título"
          type="text"
          name="title"
          value={ title }
          dataTestIDInput="title-input"
          onChangeCallback={ handleChange }
        />
        <Input
          id="subtitle-input-id"
          dataTestIDLabel="subtitle-input-label"
          labelContent="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          dataTestIDInput="subtitle-input"
          onChangeCallback={ handleChange }
        />
        <Input
          id="imagePath-input-id"
          dataTestIDLabel="image-input-label"
          labelContent="Imagem"
          type="text"
          name="imagePath"
          value={ imagePath }
          dataTestIDInput="image-input"
          onChangeCallback={ handleChange }
        />
        <TextArea
          id="textArea-input"
          testIDLabel="storyline-input-label"
          labelContent="Sinopse"
          value={ storyline }
          onChange={ handleChange }
          testIDInput="storyline-input"
          name="storyline"
        />
      </section>
    );
  }
}

AddMovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default AddMovieInfo;
