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

handle = ({ target }) => {
  const { name, value} = target
this.setState({
  [name]: value,
})
console.log()
}

  render(){
    const { onClick } = this.props
    const { title } = this.state
    return(
      <div>
        <form data-testid="add-movie-form" >
        <label htmlFor="title-input" data-testid="title-input-label" >
        Título
          <input type="text" id="title-input" data-testid="title-input" name="title"value={title} onChange={this.handle}/>
        </label>
        </form>
      </div>
    )
  }
}

export default AddMovie