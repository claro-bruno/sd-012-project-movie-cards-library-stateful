import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePatch: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;  
    this.setState({ [name]: value });
  }
  
  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    const { handleInput } = this;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            onChange={ handleInput }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;