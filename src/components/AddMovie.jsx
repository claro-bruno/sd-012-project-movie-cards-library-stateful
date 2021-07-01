import React from 'react';
import PropTypes from 'prop-types';
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
    this.submitBtn = this.submitBtn.bind(this);

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

  submitBtn() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.submitBtn }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
