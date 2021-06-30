// implement AddMovie component here
import React from 'react';
import Titulo from './subcomponents/Titulo';
import Subtitulo from './subcomponents/Subtitulo';
import ImagePath from './subcomponents/ImagePath';
import Sinopse from './subcomponents/Sinopse';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Titulo />
        <Subtitulo />
        <ImagePath />
        <Sinopse />
      </form>
    );
  }
}

export default AddMovie;
