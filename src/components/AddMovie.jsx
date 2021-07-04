import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <span>AddMovie Component</span>
        <form action="" data-testid="add-movie-form" />
      </div>
    );
  }
}

export default AddMovie;
