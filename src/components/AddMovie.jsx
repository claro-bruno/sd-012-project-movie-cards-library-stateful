// implement AddMovie component here
import React, { Component } from 'react';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImg from './AddMovieImg';
import AddMovieStoryLine from './AddMovieStoryLine';
import AddMovieRating from './AddMovieRating';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
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
      </form>
    );
  }
}

export default AddMovie;
