import React, { Component } from 'react';

class AddMovie extends Component {
  constructor () {
    super()
    this.updateState = this.updateState.bind(this)
    this.state = {
      subtitle:'',
      title:'',
      imagePath:'',
      storyline:'',
      rating: 0,
      genre:'action',
    }
  }

  updateState (e) {
    this.setState({
      title: e.target.value
    })
  }

  render () {
    const { title } = this.state;

    return (
      <form
        action=""
        data-testid="add-movie-form"
      >
        <label
          htmlFor="Titulo"
          data-testid="title-input-label"
        >
          Título
        </label>
        <input
          name="title"
          type="text"
          id="Titulo"
          value={ title }
          data-testid="title-input"
          onChange={ this.updateState }
        />
      </form>
    );
  }
}

export default AddMovie;
