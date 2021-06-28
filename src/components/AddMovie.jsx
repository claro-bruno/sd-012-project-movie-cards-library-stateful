// implement AddMovie component here
import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
// import Synopsis from './Synopsis';
// import Genre from './Genre';
// import ButtonAddMovie from './ButtonAddMovie';

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

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick, subtitle,
      title, imagePath,
      storyline, rating,
      genre, handleChange } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          name="title"
          value={ title }
          onChange={ handleChange }
        />
        <Subtitle
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
        />
        <Image
          name={ imagePath }
          value={ imagePath }
          onChange={ handleChange }
        />
        {/* <Synopsis />
        <Rating />
        <Genre />
        <ButtonAddMovie /> */}
      </form>
    );
  }
}

export default AddMovie;
