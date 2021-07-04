// implement AddMovie component here
// Iniciando o projeto
import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };

    // this.handleTitleChange = this.handleTitleChange.bind(this);
    // this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleTitleChange(event) {
  //   console.log(event);
  //   this.setState({ title: event.target.value });
  // }

  // genérico
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          name="title"
          value={ title }
          handleChange={ this.handleChange }
          type="text"
        />

        <Input
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
          type="text"
        />

        <Input
          label="Imagem"
          name="image"
          value={ imagePath }
          handleChange={ this.handleChange }
          type="text"
        />
        <TextArea
          label="Sinopse"
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
          type="textarea"
        />
        {/* <label htmlFor="link4" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ title }
            onChange={ this.handleTitleChange }
            id="link4"
            type="text"
            data-testid="title-input"
          />
        </label> */}
      </form>
    );
  }
}

export default AddMovie;
