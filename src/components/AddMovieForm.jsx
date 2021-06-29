import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './AddMovie-Inputs/TextInput';
import TextArea from './AddMovie-Inputs/TextArea';

class AddMovieForm extends React.Component {
  render() {
    const { title, subtitle, imagePatch, storyline, handleChanger } = this.props;
    return (
      <>
        <TextInput
          valorInicial={ title }
          valorAlterado={ handleChanger }
          dataTestid="title-input"
          dataTestidLabel="title-input-label"
          labelTitle="Título"
          nome="title"
          tipo="text"
        />
        <TextInput
          valorInicial={ subtitle }
          valorAlterado={ handleChanger }
          dataTestid="subtitle-input"
          dataTestidLabel="subtitle-input-label"
          labelTitle="Subtítulo"
          nome="subtitle"
          tipo="text"
        />
        <TextInput
          valorInicial={ imagePatch }
          valorAlterado={ handleChanger }
          dataTestid="image-input"
          dataTestidLabel="image-input-label"
          labelTitle="Imagem"
          nome="imagePatch"
          tipo="text"
        />
        <TextArea
          valorInicial={ storyline }
          valorAlterado={ handleChanger }
          dataTestid="storyline-input"
          dataTestidLabel="storyline-input-label"
          nome="storyline"
          labelTitle="Sinopse"
          id="text-area"
        />
      </>
    );
  }
}

AddMovieForm.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChanger: PropTypes.func.isRequired,
  imagePatch: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddMovieForm;
