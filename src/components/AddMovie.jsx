import React from 'react';
import GenericInput from './GenericInput';

class AddMovie extends React.Component {
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
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
    console.log(name);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            id="title-input"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.onChangeHandler }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            id="subtitle-input"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.onChangeHandler }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
