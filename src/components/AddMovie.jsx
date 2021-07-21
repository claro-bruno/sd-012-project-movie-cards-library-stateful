import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
    // subtitle: '',
      title: '',
    // imagePath: '',
    // storyline: '',
    // rating: 0,
    // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    console.log(target);
    this.setState({ title: target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="addMove-input" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              value={ title }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>

    );
  }
}

export default AddMovie;
