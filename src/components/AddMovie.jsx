// implement AddMovie component here
import React from 'react';
import InputText from './InputText';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.textInputChangeHandler = this.textInputChangeHandler.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine:'',
      rating:0,
      genre: 'action',
    };
  }

  textInputChangeHandler(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          labelText="Título"
          labelId="title-input-label"
          inputId="title-input"
          inputType="text"
          inputName="title"
          inputValue={ title }
          onChangeInput={ this.textInputChangeHandler }
        />
        <InputText
          labelText="Subtítulo"
          labelId="subtitle-input-label"
          inputId="subtitle-input"
          inputType="text"
          inputName="subtitle"
          inputValue={ subtitle }
          onChangeInput={ this.textInputChangeHandler }
        />
        <InputText
          labelText="Imagem"
          labelId="image-input-label"
          inputId="image-input"
          inputType="text"
          inputName="imagePath"
          inputValue={ imagePath }
          onChangeInput={ this.textInputChangeHandler }
        />
      </form>
    );
  }
}

export default AddMovie;
