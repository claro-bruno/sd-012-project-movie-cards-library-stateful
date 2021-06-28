// implement AddMovie component here
import React from 'react';
import Title from '/.Title';
import Subtitle from '/.Subtitle';
import Image from '/.Image';
import Synopsis from './Synopsis';
import Genre from '/.Genre';
import ButtonAddMovie from '/.ButtonAddMovie';

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
  }

  render() {
    const { onClick, subtitle,
      title, imagePath,
      storyline, rating,
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title />
        <Subtitle />
        <Image />
        <Synopsis />
        <Rating />
        <Genre />
        <ButtonAddMovie />
      </form>
    );
  }
}

export default AddMovie;
