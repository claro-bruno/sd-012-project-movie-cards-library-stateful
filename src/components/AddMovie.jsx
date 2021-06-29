import React, { Component } from 'react';
import SelectGenre from './myComponents/SelectGenre';
import ButtonAddMovie from './myComponents/ButtonAddMovie';
import AddTitle from './myComponents/AddTitle';
import AddSubtitle from './myComponents/AddSubtitle';
import AddImage from './myComponents/AddImage';
import AddStoryline from './myComponents/AddStoryline';
import AddRating from './myComponents/AddRating';

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
        <AddSubtitle
          inputValue={ subtitle }
          inputOnChange={ this.handleChange }
        />
        <AddImage
          inputValue={ imagePath }
          inputOnChange={ this.handleChange }
        />
        <AddStoryline
          inputValue={ storyline }
          inputOnChange={ this.handleChange }
        />
        <AddRating
          inputValue={ rating }
          inputOnChange={ this.handleChange }
        />
        <SelectGenre
          selectName="genre"
          dataLabelId="genre-input-label"
          labelInput="Gênero"
          selectId="genre-input"
          optionId="genre-option"
          htmlForId="select-genre"
          selectValue={ genre }
          selectOnChange={ this.handleChange }
        />
        <ButtonAddMovie
          buttonText="Adicionar filme"
          buttonId="send-button"
          onClickButton={ this.onClick }
        />
      </form>
    );
  }
}

export default AddMovie;
