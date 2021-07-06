// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Imagem from './Imagem';
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
          value={ title }
          handleChange={ this.handleChange }
          type="text"
        />
        <Input
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
          type="text"
        />
        <Imagem
          label="Imagem"
          name="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
          type="text"
        />
        <TextArea
          label="Sinopse"
          name="storyline"
          value={ storyline }
          handleChange={ this.handleChange }
          type="textarea"
        />
        <Input
          label="Avaliação"
          name="rating"
          value={ rating }
          handleChange={ this.handleChange }
          type="number"
        />
        <Select
          label="Gênero"
          name="genre"
          value={ genre }
          handleChange={ this.handleChange }
          type="text"
        />
        <Button onClick={ onClick } />
      </form>);
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
