import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

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

    this.ButtonClick = this.ButtonClick.bind(this);
    this.newInput = this.newInput.bind(this);
    this.initialState = this.state;
  }

  handleChange(event, stateName) {
    this.setState({ [stateName]: event.target.value });
  }

  ButtonClick() {
    const { callback } = this.props;
    const movie = { ...this.state };
    callback(movie);
    this.state = this.initialState;
    // this.setState({});
  }

  newInput(name, text, labelText, type) {
    return (
      <Input
        name={ `${name}-input` }
        testid={ `${name}-input` }
        inputText={ text }
        labelText={ labelText }
        inputType={ type }
        callback={ (event) => this.handleChange(event, `${name}`) }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const addMovieSelect = [
      { value: 'action', content: 'Ação' },
      { value: 'comedy', content: 'Comédia' },
      { value: 'thriller', content: 'Suspense' },
    ];
    return (
      <form data-testid="add-movie-form">
        { this.newInput('title', title, 'Título', 'text') }
        <br />
        { this.newInput('subtitle', subtitle, 'Subtítulo', 'text') }
        <br />
        <Input
          name="image-input"
          testid="image-input"
          inputText={ imagePath }
          labelText="Imagem"
          inputType="text"
          callback={ (event) => this.handleChange(event, 'imagePath') }
        />
        <br />
        <TextArea
          name="storyline-input"
          testid="storyline-input"
          inputText={ storyline }
          labelText="Sinopse"
          callback={ (event) => this.handleChange(event, 'storyline') }
        />
        <br />
        { this.newInput('rating', rating, 'Avaliação', 'number') }
        <br />
        <Select
          name="genre-input"
          testid="genre-input"
          optionId="genre-option"
          labelText="Gênero"
          selectedGenre={ genre }
          onSelectedGenreChange={ (event) => this.handleChange(event, 'genre') }
          optionList={ addMovieSelect }
        />
        <br />
        <button type="submit" data-testid="send-button" onClick={ this.ButtonClick() }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default AddMovie;
