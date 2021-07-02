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
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleTitleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
