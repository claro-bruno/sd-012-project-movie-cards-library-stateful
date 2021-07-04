import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Button from './Button';

const INIT_STATE = {
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

    this.handleChange = this.handleChange.bind(this);

    this.state = INIT_STATE;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input
          label="Título"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          type="text"
          name="imagePath"
          ctrl="image"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <Textarea
          label="Sinopse"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <Input
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        <Select
          label="Gênero"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
        />
        <Button onClick={ () => { onClick(this.state); this.setState(INIT_STATE); } } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
