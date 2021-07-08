import React from 'react';
import MovieImage from './NewComponents/MovieImage';
import MovieSubtitle from './NewComponents/MovieSubtitle';
import MovieTitle from './NewComponents/MovieTitle';
import MovieStoryline from './NewComponents/MovieStoryline';
import MovieRating from './NewComponents/MovieRating';

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

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <MovieTitle title={ title } handleChangeFunction={ this.handleChange } />
          <MovieSubtitle subtitle={ subtitle } handleChangeFunction={ this.handleChange } />
          <MovieImage image={ imagePath } handleChangeFunction={ this.handleChange } />
          <MovieStoryline storyline={ storyline } handleChangeFunction={ this.handleChange } />
          <MovieRating rating={ rating } handleChangeFunction={ this.handleChange } />
        </form>

      </div>
    );
  }
}

export default AddMovie;
