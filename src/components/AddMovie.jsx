import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTitle(event) {
    const { target } = event;
    this.setState({
      title: target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleTitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
