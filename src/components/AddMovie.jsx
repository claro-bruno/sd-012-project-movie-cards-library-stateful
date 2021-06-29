import React, { Component } from 'react';
import FormAddMovie from './myComponents/FormAddMovie';
import SelectGenre from './myComponents/SelectGenre';
import ButtonAddMovie from './myComponents/ButtonAddMovie';
import AddTitle from './myComponents/AddTitle';

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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onClick = () => {
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
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddTitle
          inputValue={ title }
          inputOnChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
