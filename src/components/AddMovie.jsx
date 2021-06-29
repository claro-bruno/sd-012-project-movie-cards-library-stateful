// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import ImagePath from './ImagePath';
import Storyline from './Storyline';
import GenreInput from './GenreInput';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(onClick) {
    onClick();
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form">
        <Input
          type="text"
          title="Título"
          name="title"
          value={ title }
          func={ this.handleChange }
        />
        <Input
          type="text"
          title="Subtítulo"
          name="subtitle"
          value={ subtitle }
          func={ this.handleChange }
        />
        <ImagePath
          value={ imagePath }
          func={ this.handleChange }
        />
        <Storyline
          value={ storyline }
          func={ this.handleChange }
        />
        <Input
          type="number"
          title="Avaliação"
          name="rating"
          value={ rating }
          func={ this.handleChange }
        />
        <GenreInput
          value={ genre }
          func={ this.handleChange }
        />
        <button
          type="submit"
          onClick={ () => this.handleSubmit(onClick) }
          data-testid="send-button"
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
