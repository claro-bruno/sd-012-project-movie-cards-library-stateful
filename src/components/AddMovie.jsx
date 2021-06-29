import React from 'react';
import Input from './ComponentsCriados/Input';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          type="text"
          datatestid="title-input"
          name="title"
          value={ title }
          onChange={ this.handleChange }
          labelText="Título"
          datatestidLabel="title-input-label"
        />
        <Input
          type="text"
          datatestid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          labelText="Subtítulo"
          datatestidLabel="subtitle-input-label"
        />
        <Input
          type="text"
          datatestid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          labelText="Imagem"
          datatestidLabel="image-input-label"
        />
      </form>
    );
  }
}

export default AddMovie;
