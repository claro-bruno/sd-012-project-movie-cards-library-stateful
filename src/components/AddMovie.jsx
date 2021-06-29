// implement AddMovie component here
import React from 'react';
import AddMovieField from './AddMovieField';
import AddMovieSelect from './AddMovieSelect';
import AddButton from './AddButton';

const defaultState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

// prettier-ignore
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(defaultState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieField
          label="Título"
          id="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
        <AddMovieField
          label="Subtítulo"
          id="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <AddMovieField
          label="Sinopse"
          id="storyline-input"
          type="textarea"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <AddMovieField
          label="Avaliação"
          id="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        <AddMovieField
          label="Imagem"
          id="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <AddMovieSelect value={ genre } onChange={ this.handleChange } />
        <AddButton onClick={ this.handleClick } />
      </form>
    );
  }
}

export default AddMovie;
