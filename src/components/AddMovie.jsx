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

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <Input
            htmlFor="title-input"
            dataTestIdLabel="title-input-label"
            label="Título"
            dataTestIdInput="title-input"
            name="title"
            type="text"
            value={ title }
            handleChange={ this.handleChange }
          />

          <Input
            htmlFor="subtitle-input"
            dataTestIdLabel="subtitle-input-label"
            label="Subtítulo"
            dataTestIdInput="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            handleChange={ this.handleChange }
          />
        </form>
      </section>
    );
  }
}

export default AddMovie;
