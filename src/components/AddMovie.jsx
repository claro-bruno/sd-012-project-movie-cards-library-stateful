import React from 'react';
import MovieInfo from './MovieInfo';

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

      </form>
    );
  }
}

export default AddMovie;
