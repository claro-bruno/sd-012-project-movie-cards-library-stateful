import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    }
  }

  render() {
    return (
      <form data-testid="title-input-label">
        
      </form>
    );
  }
}

export default AddMovie;