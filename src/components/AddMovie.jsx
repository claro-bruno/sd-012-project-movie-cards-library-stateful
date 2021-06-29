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
    }
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      title: value,
    })
  }

  render() {
    const { title } = this.state;
    // console.log(title);
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
        Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>        
      </form>
    );
  }
}

export default AddMovie;
