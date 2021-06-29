import React from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Button from './Button';

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
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  applyAddMovie() {
    onClick();
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
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
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
          name="image"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <Textarea value={ storyline } onChange={ this.handleChange } />
        <Input
          label="Avaliação"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
        />
        <Select value={ genre } onChange={ this.handleChange } />
        <Button onClick={ this.applyAddMovie } />
        {/* <button
          type="submit"
          onClick={ this.applyAddMovie }
          data-testid="send-button"
        >
          Adicionar filme
        </button> */}
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
}; */

export default AddMovie;
