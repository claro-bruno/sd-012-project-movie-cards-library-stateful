// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import ImagePath from './ImagePatch';
import Button from './Button';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
        <Input
          label="Título"
          name="title"
          type="text"
          value={ title }
          handleChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          type="text"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <ImagePath
          label="Imagem"
          name="imagePath"
          type="text"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <Input
          type="text"
          label="Sinopse"
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
        />
        <Input
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          handleChange={ this.handleChange }
        />
        <Select
          type="select"
          label="Gênero"
          name="genre"
          value={ genre }
          handleChange={ this.handleChange }
        />
        <Button onClick={ onClick } />
      </form>);
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
