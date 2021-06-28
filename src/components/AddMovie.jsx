import React, { Component } from 'react';

class AddMovie extends Component {
constructor(){
  super()
  this.state = {
    subtitle: "",
    title: "",
    imagePath: "",
    storyline: "",
    rating: 0,
    genre: "action",
  }
}

  render(){
    const { onClick } = this.props
    return(
      <div>
        <form data-testid="add-movie-form" >
        {this.state.genre}
        </form>
      </div>
    )
  }
}

export default AddMovie