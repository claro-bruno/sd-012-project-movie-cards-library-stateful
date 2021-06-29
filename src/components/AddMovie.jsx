import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  onClickButton = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
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
        <AddTitle name={ title } callBack={ this.handleChange } />
        <AddSubtitle name={ subtitle } callBack={ this.handleChange } />
        <AddImage name={ imagePath } callBack={ this.handleChange } />
        <AddStoryline name={ storyline } callBack={ this.handleChange } />
        <AddRating name={ rating } callBack={ this.handleChange } />
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
          onClickButton={ this.onClickButton }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
