import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      onClick: () => {},
    };
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
  render() {
    return (
      <form />
    )
  }
}

export default AddMovie;
