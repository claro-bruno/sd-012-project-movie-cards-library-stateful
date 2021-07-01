// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './AddMovieInputs/InputTitle';
import InputSubtitle from './AddMovieInputs/InputSubTitle';
import InputImg from './AddMovieInputs/InputImg';
import TextArea from './AddMovieInputs/TextArea';
import InputNumber from './AddMovieInputs/InputNumber';
import InputSelect from './AddMovieInputs/inputSelect';
import InputButton from './AddMovieInputs/InputButton';

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

  onChange = (onclick) => {
    onclick({ ...this.state });
    this.setState({ subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]:
      e.target.name === 'rating' ? Number(e.target.value) : e.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
        <InputImg value={ imagePath } onChange={ this.handleChange } />
        <TextArea value={ storyline } onChange={ this.handleChange } />
        <InputNumber value={ rating } onChange={ this.handleChange } />
        <InputSelect value={ genre } onChange={ this.handleChange } />
        <InputButton onClick={ () => this.onChange(onClick) } />
      </form>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
