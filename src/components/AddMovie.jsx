import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import SelectGenre from './SelectGenre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleReset(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    const { handleChange, handleReset } = this;

    return (
      <form data-testid="add-movie-form">
        <Input
          testID="title"
          labelName="Título"
          inputName="title"
          inputValue={ title }
          inputEvent={ handleChange }
        />
        <Input
          testID="subtitle"
          labelName="Subtítulo"
          inputName="subtitle"
          inputValue={ subtitle }
          inputEvent={ handleChange }
        />
        <Input
          testID="image"
          labelName="Imagem"
          inputName="imagePath"
          inputValue={ imagePath }
          inputEvent={ handleChange }
        />
        <Input
          testID="storyline"
          labelName="Sinopse"
          inputName="storyLine"
          inputValue={ storyLine }
          inputEvent={ handleChange }
          inputType="textarea"
        />
        <Input
          testID="rating"
          labelName="Avaliação"
          inputName="rating"
          inputValue={ rating }
          inputEvent={ handleChange }
          inputType="number"
        />
        <SelectGenre genre={ genre } selectEvent={ handleChange } />
        <button type="submit" onClick={ handleReset } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
