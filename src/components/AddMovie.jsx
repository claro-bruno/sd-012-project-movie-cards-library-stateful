// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form data-testid="add-movie">
        <label htmlFor="movie-title" data-testid="title-input-label">
          Título
          <input
            id="movieTitle"
            data-testid="title-input"
            type="text"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
