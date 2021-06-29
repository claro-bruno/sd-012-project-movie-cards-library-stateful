import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieForm from './AddMovieForm';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleChange = ({ target }) => {
    const { value } = target;
    const id = target.id === 'image' ? 'imagePath' : target.id;
    this.setState({
      [id]: value,
    });
  }

  addMovie = (e, callback) => {
    e.preventDefault();
    callback(this.state); // Ref. Reps. Diogo Sant'Anna
    this.setState(initialState);
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <AddMovieForm
        title={ title }
        subtitle={ subtitle }
        imagePath={ imagePath }
        storyline={ storyline }
        rating={ rating }
        genre={ genre }
        onChange={ this.handleChange }
        onClick={ (e) => this.addMovie(e, onClick) } // Ref. Reps. Diogo Sant'Anna
      />
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
