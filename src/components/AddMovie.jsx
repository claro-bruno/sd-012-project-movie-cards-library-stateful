// implement AddMovie component here
import React from 'react';
import InputTitle from './AddMovieInputs/InputTitle';
import InputSubtitle from './AddMovieInputs/InputSubTitle';

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
  handleChange = (e) => {this.setState({subtitle: e.target.value,})}
  render() {
    const { subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle />
        <InputSubtitle initialValue={ subtitle } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
