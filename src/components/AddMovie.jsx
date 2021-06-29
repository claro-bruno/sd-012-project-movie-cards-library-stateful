import React from 'react';
import MovieInfo from './MovieInfo';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    /*       rating: 0,
      genre: 'action', */
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <MovieInfo
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          onChange={ this.handleChange }
        />
        <Input
          inputId="rating"
          inputName="rating"
          testIdInput="rating-input"
          testIdLabel="rating-input-label"
          typeInput="number"
          value={ rating }
          onChange={ this.handleChange }
          labelText="Avaliação"
        />
      </form>
    );
  }
}

export default AddMovie;
