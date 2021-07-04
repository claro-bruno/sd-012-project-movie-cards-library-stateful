// implement AddMovie component here
import React from 'react';
import Input from './Input';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Input
          inputType="text"
          id="title"
          inputLabelName="Título"
          inputName="title"
          inputValue={ title }
          handleChange={ handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
