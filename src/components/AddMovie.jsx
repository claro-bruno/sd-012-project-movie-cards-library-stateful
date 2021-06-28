// implement AddMovie component here
import React from 'react';
import AddMovieField from './AddMovieField';
import AddMovieSelect from './AddMovieSelect';

// prettier-ignore
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieField
          label="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
        <AddMovieField
          label="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <AddMovieField
          label="Sinopse"
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <AddMovieField
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        <AddMovieField
          label="Imagem"
          type="text"
          name="image"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <AddMovieSelect
          label="Gênero"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
