import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
    this.titleHandleChange = this.titleHandleChange.bind(this);
    this.subtitleHandleChange = this.subtitleHandleChange.bind(this);
  }

  titleHandleChange(event) {
    this.setState({ title: event.target.value });
  }

  subtitleHandleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ this.titleHandleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            id="subtitle-input"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.subtitleHandleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
