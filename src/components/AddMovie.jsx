// implement AddMovie component here
import React, { Component } from 'react';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImg from './AddMovieImg';
import AddMovieStoryLine from './AddMovieStoryLine';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <AddMovieTitle
          title={ title }
          onChangeTitle={ this.handleChange }
        />
        <AddMovieSubtitle
          subtitle={ subtitle }
          onChangeSubtitle={ this.handleChange }
        />
        <AddMovieImg
          imagePath={ imagePath }
          onChangeImage={ this.handleChange }
        />
        <AddMovieStoryLine
          storyline={ storyline }
          onChangeStory={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
