// implement AddMovie component here
import React from 'react';
import Input from './Input';
import Select from './Select';

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
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Input
          inputType="text"
          id="title"
          inputLabelName="Título"
          inputName="title"
          inputValue={ title }
          handleChange={ handleChange }
        />
        <Input
          inputType="text"
          id="subtitle"
          inputLabelName="Subtítulo"
          inputName="subtitle"
          inputValue={ subtitle }
          handleChange={ handleChange }
        />
        <Input
          inputType="text"
          id="image"
          inputLabelName="Imagem"
          inputName="imagePath"
          inputValue={ imagePath }
          handleChange={ handleChange }
        />
        <Input
          inputType="textarea"
          id="storyline"
          inputLabelName="Sinopse"
          inputName="storyline"
          inputValue={ storyline }
          handleChange={ handleChange }
        />
        <Input
          inputType="number"
          id="rating"
          inputLabelName="Avaliação"
          inputName="rating"
          inputValue={ rating }
          handleChange={ handleChange }
        />
        <Select value={ genre } handleChange={ handleChange } />
      </form>
    );
  }
}

export default AddMovie;
