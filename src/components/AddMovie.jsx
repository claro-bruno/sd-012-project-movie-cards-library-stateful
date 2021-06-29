import React, { Component } from 'react';
import FormAddMovie from './myComponents/FormAddMovie';
import SelectGenre from './myComponents/SelectGenre';
import ButtonAddMovie from './myComponents/ButtonAddMovie';

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
        <FormAddMovie
          htmlForId="form-title"
          inputName="title"
          dataLabelId="title-input-label"
          labelText="Título"
          dataFormId2="title-input"
          inputType="text"
          inputValue={ title }
          inputOnChange={ this.handleChange }
        />
        <FormAddMovie
          htmlForId="form-subtitle"
          inputName="subtitle"
          dataLabelId="subtitle-input-label"
          labelText="Subtítulo"
          dataFormId2="subtitle-input"
          inputType="text"
          inputValue={ subtitle }
          inputOnChange={ this.handleChange }
        />
        <FormAddMovie
          htmlForId="form-image"
          inputName="imagePath"
          dataLabelId="image-input-label"
          labelText="Imagem"
          dataFormId2="image-input"
          inputType="text"
          inputValue={ imagePath }
          inputOnChange={ this.handleChange }
        />
        <FormAddMovie
          htmlForId="form-storyline"
          inputName="storyline"
          dataLabelId="storyline-input-label"
          labelText="Sinopse"
          dataFormId2="storyline-input"
          inputType="textarea"
          inputValue={ storyline }
          inputOnChange={ this.handleChange }
        />
        <FormAddMovie
          htmlForId="form-rating"
          inputName="rating"
          dataLabelId="rating-input-label"
          labelText="Avaliação"
          dataFormId2="rating-input"
          inputType="number"
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
