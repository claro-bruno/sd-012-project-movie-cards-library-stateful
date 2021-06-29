// implement AddMovie component here
import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Synopsis from './Synopsis';
import Appraisal from './Appraisal';
import Genre from './Genre';
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
    this.handleChange = this.handleChange.bind(this);
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
      genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          name="title"
          value={ title }
          handleChange={ this.handleChange }
        />
        <Subtitle
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <Image
          name="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <Synopsis
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <Appraisal
          name="rating"
          value={ rating }
          handleChange={ this.handleChange }
        />
        <Genre
          name="genre"
          value={ genre }
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
