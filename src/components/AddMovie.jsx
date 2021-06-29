import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      // subtitle: "",
      title: '',
      // imagePath: "",
      // storyline: "",
      // rating: 0,
      // genre: "action",
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input-label" data-testid="title-input-label">
          Título
          <input
            id="title-input-label"
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
