import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import GenreSelect from './GenreSelect';
import Textarea from './Textarea';

const stateAdMovie = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...stateAdMovie };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange({ target }) {
    const { value } = target;
    const name = target.name === 'image' ? 'imagePath' : target.name;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({ ...stateAdMovie });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <FormInput
          type="text"
          name="title"
          value={ title }
          labelText="Título"
          onChange={ this.handleInputChange }
        />
        <FormInput
          type="text"
          name="subtitle"
          value={ subtitle }
          labelText="Subtítulo"
          onChange={ this.handleInputChange }
        />
        <FormInput
          type="text"
          name="image"
          value={ imagePath }
          labelText="Imagem"
          onChange={ this.handleInputChange }
        />
        <Textarea value={ storyline } onChange={ this.handleInputChange } />
        <FormInput
          type="number"
          name="rating"
          value={ rating }
          labelText="Avaliação"
          onChange={ this.handleInputChange }
        />
        <GenreSelect
          selectedGenre={ genre }
          onChange={ this.handleInputChange }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.handleClick(this.state) }
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
