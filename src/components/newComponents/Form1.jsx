import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Input from './Input';

class Form1 extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleChange } = this.props;
    return (
      <div>
        <Input
          name="title"
          dataId="title"
          message="Título"
          value={ title }
          type="text"
          onChange={ handleChange }
        />
        <Input
          name="subtitle"
          dataId="subtitle"
          message="Subtítulo"
          value={ subtitle }
          type="text"
          onChange={ handleChange }
        />
        <Input
          name="imagePath"
          dataId="image"
          message="Imagem"
          value={ imagePath }
          type="img"
          onChange={ handleChange }
        />
        <Input
          name="storyline"
          dataId="storyline"
          message="Sinopse"
          value={ storyline }
          type="textarea"
          onChange={ handleChange }
        />
      </div>
    );
  }
}

Form1.propTypes = {
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
  imagePath: Proptypes.string.isRequired,
  storyline: Proptypes.string.isRequired,
};

export default Form1;
