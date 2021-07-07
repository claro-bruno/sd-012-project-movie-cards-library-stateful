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
    if (e.target.id === 'title') {
      this.setState({
        title: e.target.value,
      });
    }/*  else if (e.target.id === 'subtitle') {
      this.setState({
        subtitle: e.target.value,
      });
    } else if (e.target.id === 'imagePath') {
      this.setState({
        imagePath: e.target.value,
      });
    } */
  }

  render() {
    const { title, subtitle, imagePath } = this.state;

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
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.updateState }
          />
        </label>
        <label
          htmlFor="subtitulo"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.updateState }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
