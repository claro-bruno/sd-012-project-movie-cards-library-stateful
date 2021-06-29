// implement AddMovie component here
import React from 'react';
import InputTitle from './AddMovieInputs/InputTitle';
import InputSubtitle from './AddMovieInputs/InputSubTitle';
import InputImg from './AddMovieInputs/InputImg';

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
  }

  render() {
    const { subtitle, imagePath, title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ (e) => { this.setState({ title: e.target.value }); } }/>
        <InputSubtitle initialValue={ subtitle } onChange={ (e) => { this.setState({ subtitle: e.target.value }); } }/>
        <InputImg value={ imagePath } onChange={ (e) => { this.setState({ imagePath: e.target.value }); } }/>
      </form>
    );
  }
}

export default AddMovie;
