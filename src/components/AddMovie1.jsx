import React from 'react';
import Input from './Input';

class AddMovie1 extends React.Component {
  render() {
    return (
      <div>
        <Input
          dataTestidLabel="title-input-label"
          htmlFor="text-addmovie"
          labelText="Título"
          id="text-addmovie"
          type="text"
          name="title"
          dataTestidInput="title-input"
          // value={ title }
        />
        <Input
          type="text"
          labelText="Subtítulo"
          dataTestidLabel="subtitle-input-label"
          // value={ subtitle }
          dataTestidInput="subtitle-input"
          // change={ this.handleChange }
          name="subtitle"
        />
        <Input
          type="text"
          labelText="Imagem"
          dataTestidLabel="image-input-label"
          // value={ imagePath }
          dataTestidInput="image-input"
          // change={ this.handleChange }
          name="imagePath"
        />
      </div>
    );
  }
}

export default AddMovie1;
