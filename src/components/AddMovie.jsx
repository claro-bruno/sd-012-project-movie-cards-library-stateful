// implement AddMovie component here
import React from 'react';
import Titulo from './subcomponents/Titulo';
import Subtitulo from './subcomponents/Subtitulo';
import ImagePath from './subcomponents/ImagePath';
import Sinopse from './subcomponents/Sinopse';
import Avaliacao from './subcomponents/Avaliacao';
import Genre from './subcomponents/Genre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      genre: 'action',
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

  genreHandle = (event) => {
    this.setState({
      genre: event.target.value,
    });
  }

  render() {
    const { rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo />
        <Subtitulo />
        <ImagePath />
        <Sinopse />
        <Avaliacao rating={ rating } changeNumberHandle={ this.numberHandle } />
        <Genre genre={ genre } changeGenreHandle={ this.genreHandle } />
      </form>
    );
  }
}

export default AddMovie;
