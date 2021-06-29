import React from 'react';
import Input from './ComponentsCriados/Input';
import InputTitle from './ComponentsAddMovie/InputTitle';
import InputSubtitle from './ComponentsAddMovie/InputSubtitle';
import InputImage from './ComponentsAddMovie/InputImage';
import InputStoryine from './ComponentsAddMovie/InputStoryline';

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
        <InputSubtitle subtitle={ subtitle } handleChange={ handleChange } />
        <InputImage imagePath={ imagePath } handleChange={ handleChange } />
        <InputStoryine storyline={ storyline } handleChange={ handleChange } />
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
