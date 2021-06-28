import React from 'react';
import PropTypes from 'prop-types';
import InputSimple from './InputSimple';
import InputTextArea from './InputTextArea';

class FormAddMovie extends React.Component {
  render() {
    const { subtitle, title, imagePath, storyline, textInputHandler } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputSimple
          labelText="Título"
          LabelDataTestid="title-input-label"
          InputDataTestid="title-input"
          name="title"
          value={ title }
          onChange={ textInputHandler }
        />

        <InputSimple
          labelText="Subtítulo"
          LabelDataTestid="subtitle-input-label"
          InputDataTestid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ textInputHandler }
        />

        <InputSimple
          labelText="Imagem"
          LabelDataTestid="image-input-label"
          InputDataTestid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ textInputHandler }
        />

        <InputTextArea
          labelText="Sinopse"
          LabelDataTestid="storyline-input-label"
          InputDataTestid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ textInputHandler }
        />
      </form>
    );
  }
}

FormAddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  textInputHandler: PropTypes.func.isRequired,
};

export default FormAddMovie;
