import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImagePath from './InputImagePath';
import TextAreaStoryLine from './TextAreaStoryline';
import InputRating from './InputRating';
import SelectGenre from './SelectGenre';
import Button from './Button';

const initalState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = initalState;

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initalState);
  }

  render() {
    const { handleChange, handleButton } = this;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <InputTitle
            title={ title }
            handleChange={ handleChange }
          />

          <InputSubtitle
            subtitle={ subtitle }
            handleChange={ handleChange }
          />

          <InputImagePath
            imagePath={ imagePath }
            handleChange={ handleChange }
          />

          <TextAreaStoryLine
            storyline={ storyline }
            handleChange={ handleChange }
          />

          <InputRating
            rating={ rating }
            handleChange={ handleChange }
          />

          <SelectGenre
            genre={ genre }
            handleChange={ handleChange }
          />

          <Button onClick={ handleButton } />
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
