import React from 'react';
import InputAddMovieTitle from './MyComponents/InputAddMovieTitle';
import InputAddMoviesSub from './MyComponents/InputAddMoviesSub';
import InputAddMovieImg from './MyComponents/InputAddMovieImg';
import InputAddMovieSinopse from './MyComponents/InputAddMovieSinopse';
import InputAddMovieRating from './MyComponents/InputAddMovieRating';
import InputAddMovieGenre from './MyComponents/InputAddMovieGenre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputAddMovieTitle handleChange={ this.handleChange } title={ title } />
        <InputAddMoviesSub
          handleChange={ this.handleChange }
          subtitle={ subtitle }
        />
        <InputAddMovieImg
          handleChange={ this.handleChange }
          imagePath={ imagePath }
        />
        <InputAddMovieSinopse
          handleChange={ this.handleChange }
          storyline={ storyline }
        />
        <InputAddMovieRating handleChange={ this.handleChange } rating={ rating } />
        <InputAddMovieGenre handleChange={ this.handleChange } genre={ genre } />
        {/* <button data-testid="send-button">Adicionar filme</button> */}
      </form>
    );
  }
}

export default AddMovie;
