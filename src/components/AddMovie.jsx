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
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleButton(e) {
    e.preventDefault();
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
      <form data-testid="add-movie-form" onSubmit={ this.handleButton }>
        <Input
          label="Título"
          dataId="title"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleChange }
        />
        <Input
          label="Subtítulo"
          dataId="subtitle"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          dataId="image"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
        <Input
          label="Avaliação"
          dataId="rating"
          name="rating"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <Select genre={ genre } onChange={ this.handleChange } />
        <button data-testid="send-button" type="submit">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
