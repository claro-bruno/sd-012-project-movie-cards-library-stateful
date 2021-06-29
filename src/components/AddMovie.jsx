// implement AddMovie component here
import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import SelectGenre from './SelectGenre';

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
    this.createInput = this.createInput.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  createInput(value, type, callback, arr) {
    // ['name', 'label', 'labelTestId', 'inputTestId', 'labelId']
    const displayInput = (<Input
      name={ arr[0] }
      label={ arr[1] }
      labelTestId={ arr[2] }
      value={ value }
      inputTestId={ arr[3] }
      onChange={ callback }
      type={ type }
      labelId={ arr[4] }
    />);
    return displayInput;
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    const { rating, genre } = this.state;
    const { handleChange, createInput } = this;

    const titleInfos = (['title', 'Título', 'title-input-label',
      'title-input', 'titleInput']);
    const subtitleInfos = (['subtitle', 'Subtítulo', 'subtitle-input-label',
      'subtitle-input', 'subtitleInput']);
    const imageInfos = (['imagePath', 'Imagem', 'image-input-label',
      'image-input', 'imagePathInput']);
    const ratingInfos = (['rating', 'Avaliação', 'rating-input-label',
      'rating-input', 'ratingInput']);

    return (
      <form data-testid="add-movie-form">
        { createInput(title, 'text', handleChange, titleInfos) }
        { createInput(subtitle, 'text', handleChange, subtitleInfos) }
        { createInput(imagePath, 'text', handleChange, imageInfos) }
        <TextArea
          name="storyline"
          label="Sinopse"
          labelTestId="storyline-input-label"
          value={ storyline }
          inputTestId="storyline-input"
          onChange={ handleChange }
          labelId="textareInput"
        />
        { createInput(rating, 'number', handleChange, ratingInfos) }
        <SelectGenre
          name="genre"
          label="Gênero"
          labelTestId="genre-input-label"
          labelId="genreInput"
          value={ genre }
          onChange={ handleChange }
          selectTestId="genre-input"
          optionTestId="genre-option"
        />
      </form>
    );
  }
}

export default AddMovie;
