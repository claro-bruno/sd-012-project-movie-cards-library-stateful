// implement AddMovie component here
import React from 'react';
import Titulo from './subcomponents/Titulo';
import Subtitulo from './subcomponents/Subtitulo';
import ImagePath from './subcomponents/ImagePath';
import Sinopse from './subcomponents/Sinopse';
import Avaliacao from './subcomponents/Avaliacao';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
    };
    this.numberHandle = this.numberHandle.bind(this);
  }

  numberHandle = (event) => {
    this.setState(
      {
        rating: event.target.value,
      },
    );
  }

  render() {
    const { rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo />
        <Subtitulo />
        <ImagePath />
        <Sinopse />
        <Avaliacao rating={ rating } changeNumberHandle={ this.numberHandle } />
      </form>
    );
  }
}

export default AddMovie;
