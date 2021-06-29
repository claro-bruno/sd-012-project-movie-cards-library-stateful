import React from 'react';
import InputTitle from './ComponentsAddMovie/InputTitle';
import InputSubtitle from './ComponentsAddMovie/InputSubtitle';
import InputImage from './ComponentsAddMovie/InputImage';
import InputStoryine from './ComponentsAddMovie/InputStoryline';
import InputRating from './ComponentsAddMovie/InputRating';

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
        <InputRating rating={ rating } handleChange={ handleChange } />
      </form>
    );
  }
}

export default AddMovie;
