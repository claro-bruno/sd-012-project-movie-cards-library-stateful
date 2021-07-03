import React from 'react';
import InputImg from './InputImg';
import InputRating from './InputRating';
import InputSubtitle from './InputSubtitle';
import InputTitle from './InputTitle';
import SelectGenre from './SelectGenre';
import TextArea from './TextArea';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleClick } />
        <InputSubtitle value={ subtitle } onChange={ this.handleClick } />
        <InputImg value={ imagePath } onChange={ this.handleClick } />
        <TextArea value={ storyline } onChange={ this.handleClick } />
        <InputRating value={ rating } onChange={ this.handleClick } />
        <SelectGenre value={ genre } onChange={ this.handleClick } />
      </form>
    );
  }
}

export default AddMovie;
