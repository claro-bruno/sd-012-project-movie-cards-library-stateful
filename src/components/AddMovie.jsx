import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieTitle from './AddMovieTitle';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImagePath from './AddMovieImagePath';
import AddMovieSinopse from './AddMovieSinopse';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';
import AddMovieButon from './AddMovieButon';

class AddMovie extends Component {
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
  }

handle = ({ target }) => {
  const { name, value } = target;
  this.setState({
    [name]: name === 'rating' ? Number(value) : value,
  });
}

Click = () => {
  const { onClick } = this.props;
  onClick({ ...this.state });
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
    <div>
      <form data-testid="add-movie-form">
        <AddMovieTitle handle={ this.handle } title={ title } />
        <AddMovieSubtitle handle={ this.handle } subtitle={ subtitle } />
        <AddMovieImagePath handle={ this.handle } imagePath={ imagePath } />
        <AddMovieSinopse handle={ this.handle } storyline={ storyline } />
        <AddMovieRating handle={ this.handle } rating={ rating } />
        <AddMovieGenre handle={ this.handle } genre={ genre } />
        <AddMovieButon Click={ this.Click } />
      </form>
    </div>
  );
}
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
