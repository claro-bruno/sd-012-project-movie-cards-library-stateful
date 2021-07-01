// implement AddMovie component here
// Iniciando o projeto
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    console.log(event);
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="link4" data-testid="title-input-label">
          Título
          <input
            name="title"
            value={ title }
            onChange={ this.handleTitleChange }
            id="link4"
            type="text"
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
