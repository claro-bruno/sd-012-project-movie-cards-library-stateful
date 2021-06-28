import React from 'react';

class AddMovie extends React.Component {
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

  handleClick() {
    console.log('clicou!!!');
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <p>hello</p>
      </form>
    );
  }
}

export default AddMovie;
