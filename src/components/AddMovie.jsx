// implement AddMovie component here
import React from 'react';
import InputText from './InputText';
import addMoviesList from '../addMovies';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.textInputChangeHandler = this.textInputChangeHandler.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  textInputChangeHandler(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const estado = this.state;
    return (
      <form data-testid="add-movie-form">
        { addMoviesList.map((movie) => (
          <InputText
            key={ movie.inputName }
            labelText={ movie.labelText }
            labelId={ movie.labelId }
            inputId={ movie.inputId }
            inputType={ movie.inputType }
            inputName={ movie.inputName }
            inputValue={ estado[movie.inputValue] }
            onChangeInput={ this.textInputChangeHandler }
          />
        ))}
      </form>
    );
  }
}

export default AddMovie;
