// implement AddMovie component here
import React, { Component } from 'react';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImg from './AddMovieImg';
import AddMovieStoryLine from './AddMovieStoryLine';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';
import AddMovieButton from './AddMovieButton';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.clickFunction = this.clickFunction.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  clickFunction() {
    // onClick();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange } = this;
    return (
      <form
        data-testid="add-movie-form"
      >
        <AddMovieTitle
          title={ title }
          onChangeTitle={ handleChange }
        />
        <AddMovieSubtitle
          subtitle={ subtitle }
          onChangeSubtitle={ handleChange }
        />
        <AddMovieImg
          imagePath={ imagePath }
          onChangeImage={ handleChange }
        />
        <AddMovieStoryLine
          storyline={ storyline }
          onChangeStory={ handleChange }
        />
        <AddMovieRating
          rating={ rating }
          onChangeRating={ handleChange }
        />
        <AddMovieGenre
          genre={ genre }
          onChangeGenre={ handleChange }
        />
        <AddMovieButton
          clickFunction={ () => this.clickFunction() }
        />
      </form>
    );
  }
}

export default AddMovie;
