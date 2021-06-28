// implement AddMovie component here
import React, { Component } from 'react';

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

  getTextInput = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.state;
    const { getTextInput } = this;
    return (
      <form data-testid="add-movie-form" action="">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            type="text"
            value={ title }
            onChange={ getTextInput }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
