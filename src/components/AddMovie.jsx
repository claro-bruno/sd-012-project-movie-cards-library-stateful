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
        {this.state.genre}
      </div>
    )
  }
}

export default AddMovie