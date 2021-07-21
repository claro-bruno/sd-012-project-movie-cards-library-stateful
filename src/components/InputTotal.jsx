import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Input from './Input';

class InputTotal extends Component {
  render() {
    const { handleChange, title, subtitle, imagePath } = this.props;
    return (
      <>
        <Input
          labelText="Título"
          dataTestId="title-input"
          valueText={ title }
          onTextChange={ handleChange }
          name="title"
        />
        <Input
          labelText="Subtítulo"
          dataTestId="subtitle-input"
          valueText={ subtitle }
          onTextChange={ handleChange }
          name="subtitle"
        />
        <Input
          labelText="Imagem"
          dataTestId="image-input"
          valueText={ imagePath }
          onTextChange={ handleChange }
          name="imagePath"
        />

      </>
    );
  }
}

InputTotal.propTypes = {
  title: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  subtitle: Proptypes.string.isRequired,
  imagePath: Proptypes.string.isRequired,
};

export default InputTotal;
