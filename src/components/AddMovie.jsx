import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import MovieInfos from './MovieInfos';
import Select from './Select';
import Button from './Button';

const genres = [
  { genre: 'Ação', genreValue: 'action' },
  { genre: 'Comédia', genreValue: 'comedy' },
  { genre: 'Suspense', genreValue: 'thriller' },
];

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

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    const newMovie = {
      title,
      subtitle,
      storyline,
      imagePath,
      rating: +rating,
      genre,
      bookmarked: false,
    };
    onClick(newMovie);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.exact({
  onClick: PropTypes.func.isRequired,
}).isRequired;

export default AddMovie;
