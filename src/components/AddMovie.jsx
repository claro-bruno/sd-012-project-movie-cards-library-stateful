// implement AddMovie component here
import React from 'react';
import InputTitle from './AddMovieInputs/InputTitle';
import InputSubtitle from './AddMovieInputs/InputSubTitle';
import InputImg from './AddMovieInputs/InputImg';
import TextArea from './AddMovieInputs/TextArea';
import InputNumber from './AddMovieInputs/InputNumber';

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
    const { subtitle, imagePath, title, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ (e) => { this.setState({ title: e.target.value }); } } />
        <InputSubtitle value={ subtitle } onChange={ (e) => { this.setState({ subtitle: e.target.value }); } } />
        <InputImg value={ imagePath } onChange={ (e) => { this.setState({ imagePath: e.target.value }); } } />
        <TextArea value={ storyline } onChange={ (e) => { this.setState({ storyline: e.target.value }); } } />
        <InputNumber value={ rating } onChange={ (e) => { this.setState({ rating: e.target.value }); } } />
      </form>
    );
  }
}

export default AddMovie;
