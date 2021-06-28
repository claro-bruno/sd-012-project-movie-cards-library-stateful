import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { importMovieTitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="importMovieTitle" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="importMovieTitle"
            value={ importMovieTitle }
            id="importMovieTitle"
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
