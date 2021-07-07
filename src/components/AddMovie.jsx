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

  render() {
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" />
      </div>
    );
  }
}

export default AddMovie;
