// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Image from './formComponent/AddMovie-imagePath';
import Title from './formComponent/AddMovie-inputTitle';
import Subtitle from './formComponent/AddMovie-inputSubtitle';
import TextArea from './formComponent/AddMovie-textArea';
import Select from './formComponent/AddMovie-select';
import Rating from './formComponent/AddMovie-rating';
import ButtonAddMovie from './formComponent/AddMovie-buttonAddMovie';

const STATE = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = STATE;
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  getState = () => {
    const { onClick } = this.props;
    onClick({ ...this.state });
    this.setState(STATE);
  }

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title name="title" value={ title } onChange={ this.onChange } />
        <Subtitle name="subtitle" value={ subtitle } onChange={ this.onChange } />
        <Image name="imagePath" value={ imagePath } onChange={ this.onChange } />
        <TextArea name="storyline" value={ storyline } onChange={ this.onChange } />
        <Rating name="rating" value={ rating } onChange={ this.onChange } />
        <Select name="genre" value={ genre } onChange={ this.onChange } />
        <ButtonAddMovie addMovie={ this.getState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
