import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovieForm1 extends Component {
  render() {
    const { state, handleChange } = this.props;
    const { title, subtitle, imagePath } = state;

    return (
      <div>
        <Input
          inputLabel="Título"
          inputLabelTestId="title-input-label"
          inputValue={ title }
          onChangeInput={ handleChange }
          inputId="add-title"
          inputTestId="title-input"
          inputName="title"
        />
        <Input
          inputLabel="Subtítulo"
          inputLabelTestId="subtitle-input-label"
          inputValue={ subtitle }
          onChangeInput={ handleChange }
          inputId="add-subtitle"
          inputTestId="subtitle-input"
          inputName="subtitle"
        />
        <Input
          inputLabel="Imagem"
          inputLabelTestId="image-input-label"
          inputValue={ imagePath }
          onChangeInput={ handleChange }
          inputId="add-image"
          inputTestId="image-input"
          inputName="imagePath"
        />
      </div>
    );
  }
}

AddMovieForm1.propTypes = {
  state: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieForm1;
