import React from 'react';
import Input from './ComponentsCriados/Input';
import InputTitle from './ComponentsAddMovie/InputTitle';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
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
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    const { handleChange } = this;
    return (
      <form data-testid="add-movie-form">
        <InputTitle title={ title } handleChange={ handleChange } />
        <Input
          type="text"
          datatestid="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
          labelText="Subtítulo"
          datatestidLabel="subtitle-input-label"
        />
        <Input
          type="text"
          datatestid="image-input"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          labelText="Imagem"
          datatestidLabel="image-input-label"
        />
        <Input
          type="textarea"
          datatestid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
          labelText="Sinopse"
          datatestidLabel="storyline-input-label"
        />
        <Input
          type="number"
          datatestid="rating-input"
          name="rating"
          value={ rating }
          onChange={ handleChange }
          labelText="Avaliação"
          datatestidLabel="rating-input-label"
        />
      </form>
    );
  }
}

export default AddMovie;
