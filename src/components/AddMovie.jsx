import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onChangeInputTitle = this.onChangeTitle.bind(this);
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Título
          <input
            data-testid="title-input"
            id="text-input"
            type="text"
            value={ this.state.title }
            onChange={ this.onChangeTitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
