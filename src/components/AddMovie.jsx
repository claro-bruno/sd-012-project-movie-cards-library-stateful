import React from 'react';
import PropTypes from 'prop-types';
import InputSimple from './InputSimple';
import InputTextArea from './InputTextArea';
import ImgInputAddMovie from './ImgInputAddMovie';
import SelectGenre from './SelectGenre';

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
    this.handler = this.handler.bind(this);
    this.AddMovie = this.AddMovie.bind(this);
  }

  handler(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  AddMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputSimple
          labelText="Título"
          name="title"
          value={ title }
          onChange={ this.handler }
        />
        <InputSimple
          labelText="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handler }
        />
        <ImgInputAddMovie value={ imagePath } onChange={ this.handler } />
        <InputTextArea
          name="storyline"
          value={ storyline }
          onChange={ this.handler }
        />
        <InputSimple
          name="rating"
          type="number"
          value={ rating }
          labelText="Avaliação"
          onChange={ this.handler }
        />
        <SelectGenre value={ genre } onChange={ this.handler } />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.AddMovie }
        >
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
