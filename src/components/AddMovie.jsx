import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextAreas from './textAreas';
import Genre from './Genre';
import InputImage from './inputImage';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

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
    this.setState({ [name]: value });
  }

  handleSubmit() {
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
        <Input
          labelText="Título"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Subtítulo"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <InputImage value={ imagePath } onChange={ this.handleChange } />
        <TextAreas
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
        <Input
          name="rating"
          type="number"
          value={ rating }
          labelText="Avaliação"
          onChange={ this.handleChange }
        />
        <Genre value={ genre } onChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleSubmit }
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
