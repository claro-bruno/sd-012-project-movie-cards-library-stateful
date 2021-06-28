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
    this.onChangeSubtitle = this.onChangeSubtitle.bind(this);
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeSubtitle(e) {
    this.setState({
      subtitle: e.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="text-input-label">
          Título
          <input
            data-testid="title-input"
            id="title-input"
            type="text"
            value={ title }
            onChange={ this.onChangeTitle }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.onChangeSubtitle }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
