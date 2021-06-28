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

  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" action="">
        7 Requisito
      </form>
    );
  }
}

export default AddMovie;
