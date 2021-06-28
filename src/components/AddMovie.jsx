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

  submitButton = () => {
    const { onClick } = this.props;
    onClick();
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <AddMovieForm
        onClick={ this.submitButton }
        onChange={ this.handleChange }
        title={ title }
        subtitle={ subtitle }
        imagePath={ imagePath }
        storyline={ storyline }
        rating={ rating }
        genre={ genre }
      />
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
