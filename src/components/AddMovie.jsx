import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    
    this.state = {
      subtitle: '',
      title: '',
      imagePatch: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }
  render() {
    const { onClick } = this.props;
    return (
      <div></div>
    );
  }
}

export default AddMovie;