// implement AddMovie component here
import React from 'react';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          name="title"
          type="text"
          value={ title }
          label="Título"
          handleChange={ this.handleChange }
        />
        <Input
          name="subtitle"
          type="text"
          value={ subtitle }
          label="Subtítulo"
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
