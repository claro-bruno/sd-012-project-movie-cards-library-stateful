// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
    };
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form
        data-testid="add-movie-form"
      >
        <label
          htmlFor="formText"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
