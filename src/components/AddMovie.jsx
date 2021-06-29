// implement AddMovie component here
import React from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import addMoviesList from '../addMovies';
import optionsAddMovies from '../addMoviesOptions';

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
        <InputSelect
          labelText="Gênero"
          labelId="genre-input-label"
          selectId="genre-input"
          selectValue={ estado.genre }
          selectName="genre"
          onChangeInput={ this.textInputChangeHandler }
          optionId="genre-option"
          optionValue={ optionsAddMovies }
        />
      </form>
    );
  }
}

export default AddMovie;
