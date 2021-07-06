import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Inputs from './Inputs';

class FormPart1 extends Component {
  render() {
    const { state, handleChange } = this.props;
    const { subtitle, title, imagePath, storyline } = state;
    return (
      <div>
        <Inputs
          label="Título"
          labelTestId="title-input-label"
          inputName="title"
          inputType="text"
          inputTestId="title-input"
          inputValue={ title }
          inputOnChange={ handleChange }
        />
        <Inputs
          label="Subtítulo"
          labelTestId="subtitle-input-label"
          inputName="subtitle"
          inputType="text"
          inputTestId="subtitle-input"
          inputValue={ subtitle }
          inputOnChange={ handleChange }
        />
        <Inputs
          label="Imagem"
          labelTestId="image-input-label"
          inputName="imagePath"
          inputType="text"
          inputTestId="image-input"
          inputValue={ imagePath }
          inputOnChange={ handleChange }
        />
        <Inputs
          label="Sinopse"
          labelTestId="storyline-input-label"
          inputName="storyline"
          inputType="text"
          inputTestId="storyline-input"
          inputValue={ storyline }
          inputOnChange={ handleChange }
        />
      </div>
    );
  }
}

FormPart1.propTypes = {
  state: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FormPart1;
