import React from 'react';
import Subtitulo from './AddMovieComponents/Subtitulo';
import Titulo from './AddMovieComponents/Titulo';
import Imagem from './AddMovieComponents/Imagem';
import TextArea from './AddMovieComponents/TextArea';
import Number from './AddMovieComponents/Number';
import Select from './AddMovieComponents/Select';
import Button from './AddMovieComponents/Button';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  getState = () => {
    const { onClick } = this.props;
    onClick({ ...this.state });
    this.setState(INITIAL_STATE);
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Titulo name="title" value={ title } onChange={ this.onChange } />
        <Subtitulo name="subtitle" value={ subtitle } onChange={ this.onChange } />
        <Imagem name="imagePath" value={ imagePath } onChange={ this.onChange } />
        <TextArea name="storyline" value={ storyline } onChange={ this.onChange } />
        <Number name="rating" value={ rating } onChange={ this.onChange } />
        <Select name="genre" value={ genre } onChange={ this.onChange } />
        <Button addMovie={ this.getState } />
      </form>
    );
  }
}

export default AddMovie;
