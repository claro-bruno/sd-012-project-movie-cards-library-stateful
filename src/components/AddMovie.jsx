import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
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

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addMovie() {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          titleLabel="Título"
          name="title"
          value={ title }
          onChange={ this.handleChange }
          testId="title"
        />
        <Input
          titleLabel="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          testId="subtitle"
        />
        <Input
          titleLabel="Imagem"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          testId="image"
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <Input
          titleLabel="Avaliação"
          name="rating"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          testId="rating"
        />
        <Select value={ genre } onChange={ this.handleChange } />
        <button data-testid="send-button" onClick={ this.addMovie } type="button">
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
