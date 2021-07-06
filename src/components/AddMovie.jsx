import React, { Component } from 'react';

class AddMovie extends Component {
  constructor () {
    super()
    this.state = {
      subtitle:'',
      title:'',
      imagePath:'',
      storyline:'',
      rating: 0,
      genre:'action',
    }
  }

  render () {
    
    return (
      <form
        action=""
        data-testid="add-movie-form"
      >
        <p>oi</p>
        <p>oi</p>
        <p>oi</p>
      </form>
    );
  }
}

export default AddMovie;
