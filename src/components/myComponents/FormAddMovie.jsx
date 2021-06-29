import React, { Component } from 'react';

class FormAddMovie extends Component {
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

  render() {
    return (
      <form data-testid="add-movie-form">
        <component>

        </component>
      </form>
    );
  }
}

export default FormAddMovie;
