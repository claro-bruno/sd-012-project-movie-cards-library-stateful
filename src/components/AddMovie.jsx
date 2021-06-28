import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieForm from './AddMovieForm';

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

  handleChange = ({ target }) => {
    const { value } = target;
    const id = target.id === 'image' ? 'imagePath' : target.id;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <AddMovieForm
        onClick={ onClick }
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
