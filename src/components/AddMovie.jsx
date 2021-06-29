// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          testIdLabel="title-input-label"
          labelText="Título"
          name="title"
          value={ title }
          testid="title-input"
          onChange={ this.handleChange }
        />
        <Input
          testIdLabel="subtitle-input-label"
          labelText="Subtítulo"
          name="subtitle"
          value={ subtitle }
          testid="subtitle-input"
          onChange={ this.handleChange }
        />
        <Input
          testIdLabel="image-input-label"
          labelText="Imagem"
          name="imagePath"
          value={ imagePath }
          testid="image-input"
          onChange={ this.handleChange }
        />
        <Input
          testIdLabel="storyline-input-label"
          labelText="Sinopse"
          name="storyline"
          value={ storyline }
          testid="storyline-input"
          onChange={ this.handleChange }
        />
        <Input
          type="number"
          testIdLabel="rating-input-label"
          labelText="Avaliação"
          name="rating"
          value={ rating }
          testid="rating-input"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
