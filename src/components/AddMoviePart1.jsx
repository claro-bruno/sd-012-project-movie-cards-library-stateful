import React from 'react';
import PropTypes from 'prop-types';
import InputComponent from './inputs/InputComponent';

class AddMoviePart1 extends React.Component {
  render() {
    const { handleChange, state } = this.props;
    const { title, subtitle, imagePath } = state;

    return (
      <div>
        <InputComponent
          label="Título"
          stateName="title"
          inputType="text"
          identifier="title-input"
          onChangeInput={ handleChange }
          inputValue={ title }
        />
        <InputComponent
          label="Subtítulo"
          stateName="subtitle"
          inputType="text"
          identifier="subtitle-input"
          onChangeInput={ handleChange }
          inputValue={ subtitle }
        />
        <InputComponent
          label="Imagem"
          stateName="imagePath"
          inputType="text"
          identifier="image-input"
          onChangeInput={ handleChange }
          inputValue={ imagePath }
        />
      </div>
    );
  }
}

AddMoviePart1.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMoviePart1;
