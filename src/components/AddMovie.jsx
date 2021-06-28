import React from 'react';

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
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {

    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="label-title"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleTitleChange }
          />
        </label>
      </form>
    )
  }
}

export default AddMovie;