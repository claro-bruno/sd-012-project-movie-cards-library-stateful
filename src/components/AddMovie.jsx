import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
    //  subtitle: '',
      title: '',
    //  imagePath: '',
    //  storyline: '',
    //  rating: 0,
    //  genre: 'action',
    };
  }

  updateState(e) {
    this.setState({
      title: e.target.value,
    });
  }

  render() {
    const { title } = this.state;

    return (
      <form
        action=""
        data-testid="add-movie-form"
      >
        <label
          htmlFor="Título"
          data-testid="title-input-label"
        >
          Título
          <input
            name="title"
            type="text"
            id="Título"
            value={ title }
            data-testid="title-input"
            onChange={ this.updateState }
          />
        </label>
        {/* <label
        htmlFor=""
        >

        </label> */}
      </form>
    );
  }
}

export default AddMovie;
