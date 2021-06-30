// implement AddMovie component here
import React from 'react';
import Titulo from './subcomponents/Titulo';
import Subtitulo from './subcomponents/Subtitulo';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <Titulo />
        <Subtitulo />
      </form>
    );
  }
}

export default AddMovie;
