import React from 'react';
import DropdownList from './DropdownList';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      image: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, image, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <input
          name="title"
          label="Título"
          onChange={ this.handleChange }
          value={ title }
        />
        <input
          name="subtitle"
          label="Subtítulo"
          onChange={ this.handleChange }
          value={ subtitle }
        />
        <input
          name="image"
          label="Imagem"
          onChange={ this.handleChange }
          value={ image }
        />
        <input
          name="storyline"
          label="Sinopse"
          onChange={ this.handleChange }
          value={ storyline }
          type="textarea"
        />
        <input
          name="rating"
          label="Avaliação"
          onChange={ this.handleChange }
          value={ rating }
        />
        <DropdownList
          value={ genre }
          onChange={ this.handleChange }
        />
        <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
