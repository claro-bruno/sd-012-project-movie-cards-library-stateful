import React from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          titleLabel="Título"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          titleLabel="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Input
          titleLabel="Imagem"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
