import React from 'react';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import ImagePath from './ImagePath';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import Genero from './Genero';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo title={ title } handleChange={ this.handleChange } />
        <Subtitulo subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <Sinopse storyline={ storyline } handleChange={ this.handleChange } />
        <Avaliacao rating={ rating } handleChange={ this.handleChange } />
        <Genero genre={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
